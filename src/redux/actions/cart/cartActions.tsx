import { Dispatch } from "react";
import { Product } from "../../../mockdata/products";
import { CartActionTypes } from "../../actiontypes/cart";
import { CartAction } from "../../interfaces/cart/cartInterface";

export const handleCheckout = (products: Product[]): void => {
  alert(`You have checked out the following products!
    ${products.map((item) => {
      return "\n" + item.productName + `(${item.quantity} items)`;
    })}
    \nTotal Cost: $${products.reduce((current: number, item: Product) => {
      return current + item.quantity * item.cost;
    }, 0)}`);
};

export const handleQuantityChange = (
  dispatch: Dispatch<CartAction>,
  productId: number,
  quantity: number
): void => {
  dispatch({
    type: CartActionTypes.CHANGE_QUANTITY,
    payload: { productId: productId, quantity: quantity, cost: 0 },
  });
};

export const handleDeleteItem = (
  dispatch: Dispatch<CartAction>,
  productId: number
): void => {
  dispatch({
    type: CartActionTypes.DELETE_ITEM,
    payload: { productId: productId, quantity: 0, cost: 0 },
  });
};
