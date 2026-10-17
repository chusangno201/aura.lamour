import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { appState } from "../../../db/schema";
import { defaultState } from "../../seed";
import type { AppState } from "../../types";

export const dynamic = "force-dynamic";

function validState(value: unknown): value is AppState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<AppState>;
  return Array.isArray(candidate.products) && Array.isArray(candidate.orders) && Array.isArray(candidate.ads);
}

export async function GET() {
  try {
    const db = getDb();
    const [row] = await db.select().from(appState).where(eq(appState.id, 1)).limit(1);
    if (!row) {
      await db.insert(appState).values({ id: 1, payload: JSON.stringify(defaultState) });
      return Response.json({ state: defaultState });
    }
    return Response.json({ state: JSON.parse(row.payload) });
  } catch (error) {
    return Response.json({ state: defaultState, warning: error instanceof Error ? error.message : "Không tải được dữ liệu" });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!validState(body)) return Response.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
    const db = getDb();
    await db.insert(appState).values({ id: 1, payload: JSON.stringify(body) })
      .onConflictDoUpdate({ target: appState.id, set: { payload: JSON.stringify(body), updatedAt: new Date().toISOString() } });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Không lưu được dữ liệu" }, { status: 500 });
  }
}
