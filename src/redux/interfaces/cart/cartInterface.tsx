type ProductPayload = {
  productId: number;
  productName?: string;
  productImage?: string;
  cost: number | 0;
  quantity: number | 0;
};

export type CartAction = {
  type: string;
  payload: ProductPayload;
};

export type State = {};
