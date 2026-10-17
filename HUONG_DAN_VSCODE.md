# Mở và chạy dự án trong VS Code

## Yêu cầu

- Cài Node.js phiên bản 22 trở lên.
- Cài Visual Studio Code.

## Chạy lần đầu

1. Giải nén file ZIP.
2. Mở VS Code, chọn **File > Open Folder** và chọn thư mục dự án.
3. Trong VS Code chọn **Terminal > New Terminal**.
4. Chạy lần lượt các lệnh:

```bash
corepack enable
pnpm install
pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_nebulous_silverclaw.sql
pnpm dev
```

5. Mở địa chỉ hiển thị trong Terminal, thường là:

```text
http://localhost:5173
```

## Những lần chạy sau

Chỉ cần mở Terminal và chạy:

```bash
pnpm dev
```

## Các file chính

- `app/sales-app.tsx`: giao diện và công thức tính toán.
- `app/seed.ts`: dữ liệu mẫu ban đầu.
- `app/api/state/route.ts`: API lưu và đọc dữ liệu.
- `db/schema.ts`: cấu trúc cơ sở dữ liệu.
- `app/globals.css`: màu sắc và giao diện responsive.

## Công thức đang sử dụng

- Đơn giá lấy tự động theo mã SKU.
- Tổng đơn = số lượng × giá bán + phí ship khách trả.
- Còn thu khi giao = tổng đơn − tiền khách đã cọc.
- Đơn hủy không trừ tồn kho.
- Lợi nhuận theo đơn = doanh thu đã thu − giá vốn đã bán − Ads − ship thực chi − phí sàn.
- Dòng tiền = doanh thu đã thu − vốn nhập hàng − Ads − ship thực chi − phí sàn.

