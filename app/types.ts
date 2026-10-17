export type Product = {
  id: string;
  importDate: string;
  sku: string;
  name: string;
  quantityIn: number;
  unitCost: number;
  listPrice: number;
  salePrice: number;
  plannedAds: number;
};

export type Order = {
  id: string;
  orderDate: string;
  customer: string;
  phone: string;
  address: string;
  productName: string;
  size: string;
  color: string;
  quantity: number;
  sku: string;
  deposit: number;
  shippingFee: number;
  payment: "Chưa thanh toán" | "Đã thanh toán";
  status: "Đã đặt" | "Đang giao" | "Đã giao" | "Đã hủy";
  actualShipping: number;
  platformFee: number;
  collectedDate: string;
  note: string;
};

export type AdSpend = {
  id: string;
  date: string;
  channel: string;
  budget: number;
  actualSpend: number;
};

export type AppState = {
  products: Product[];
  orders: Order[];
  ads: AdSpend[];
};
