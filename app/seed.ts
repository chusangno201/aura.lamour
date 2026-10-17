import type { AppState } from "./types";

export const defaultState: AppState = {
  products: [
    { id: "p1", importDate: "2026-10-28", sku: "AURA-HONG-01", name: "Túi xách Hồng", quantityIn: 10, unitCost: 233000, listPrice: 500000, salePrice: 420000, plannedAds: 100000 },
    { id: "p2", importDate: "2026-10-29", sku: "AURA-CAM-02", name: "Túi xách Cam", quantityIn: 5, unitCost: 218000, listPrice: 500000, salePrice: 380000, plannedAds: 100000 },
    { id: "p3", importDate: "2026-10-30", sku: "AURA-TRANG-03", name: "Túi xách Trắng", quantityIn: 5, unitCost: 230000, listPrice: 500000, salePrice: 470000, plannedAds: 100000 },
    { id: "p4", importDate: "2026-10-31", sku: "AURA-KHOAC-04", name: "Áo khoác", quantityIn: 10, unitCost: 100000, listPrice: 500000, salePrice: 195000, plannedAds: 100000 },
    { id: "p5", importDate: "2026-11-01", sku: "AURA-VAY-05", name: "Váy", quantityIn: 10, unitCost: 133000, listPrice: 500000, salePrice: 270000, plannedAds: 100000 },
  ],
  orders: [
    { id: "o1", orderDate: "2026-10-28", customer: "Nguyễn Văn A", phone: "0901234567", address: "TP.HCM", productName: "Túi xách Hồng", size: "M", color: "Đen", quantity: 1, sku: "AURA-HONG-01", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã giao", actualShipping: 0, platformFee: 0, collectedDate: "2026-10-28", note: "" },
    { id: "o2", orderDate: "2026-10-29", customer: "Nguyễn Văn A", phone: "0901234567", address: "", productName: "Túi xách Cam", size: "M", color: "Đen", quantity: 1, sku: "AURA-CAM-02", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã giao", actualShipping: 0, platformFee: 0, collectedDate: "2026-10-29", note: "" },
    { id: "o3", orderDate: "2026-10-30", customer: "Nguyễn Văn A", phone: "0901234567", address: "", productName: "Váy", size: "Khác", color: "", quantity: 1, sku: "AURA-VAY-05", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã giao", actualShipping: 0, platformFee: 0, collectedDate: "2026-10-30", note: "" },
    { id: "o4", orderDate: "2026-10-29", customer: "Nguyễn Văn A", phone: "0901234567", address: "", productName: "Áo khoác", size: "Khác", color: "", quantity: 1, sku: "AURA-KHOAC-04", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã giao", actualShipping: 0, platformFee: 0, collectedDate: "2026-10-29", note: "" },
    { id: "o5", orderDate: "2026-10-31", customer: "Nguyễn Văn A", phone: "0901234567", address: "", productName: "Túi xách Hồng", size: "Khác", color: "", quantity: 1, sku: "AURA-HONG-01", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã giao", actualShipping: 0, platformFee: 0, collectedDate: "2026-10-31", note: "" },
    { id: "o6", orderDate: "2026-11-01", customer: "Nguyễn Văn A", phone: "0901234567", address: "", productName: "Túi xách Trắng", size: "Khác", color: "", quantity: 1, sku: "AURA-TRANG-03", deposit: 0, shippingFee: 0, payment: "Đã thanh toán", status: "Đã hủy", actualShipping: 0, platformFee: 0, collectedDate: "", note: "" },
  ],
  ads: [
    { id: "a1", date: "2026-10-28", channel: "Facebook", budget: 100000, actualSpend: 100000 },
    { id: "a2", date: "2026-10-29", channel: "Facebook", budget: 100000, actualSpend: 100000 },
    { id: "a3", date: "2026-10-30", channel: "Facebook", budget: 100000, actualSpend: 100000 },
    { id: "a4", date: "2026-10-31", channel: "Facebook", budget: 100000, actualSpend: 100000 },
  ],
};
