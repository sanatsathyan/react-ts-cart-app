export type Product = {
  productId: number;
  productName: string | "";
  productImage: string | "";
  cost: number | 0;
  quantity: number | 0;
};

export const products: Product[] = [
  {
    productId: 1,
    productName: "Product 1",
    productImage:
      "http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon.png",
    cost: 100,
    quantity: 1,
  },
  {
    productId: 2,
    productName: "Product 2",
    productImage:
      "http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon.png",
    cost: 50,
    quantity: 1,
  },
  {
    productId: 3,
    productName: "Product 3",
    productImage:
      "http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon.png",
    cost: 200,
    quantity: 1,
  },
];
