import { Product } from "../../../mockdata/products";
import { CartAction } from "../../interfaces/cart/cartInterface";

export const cartReducer = (
  state: Product[],
  action: CartAction
): Product[] => {
  switch (action.type) {
    case "CHANGE_QUANTITY":
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: action.payload.quantity };
        } else {
          return item;
        }
      });
    case "DELETE_ITEM":
      return state.filter((item) => {
        return item.productId !== action.payload.productId;
      });
    default:
      return state;
  }
};
