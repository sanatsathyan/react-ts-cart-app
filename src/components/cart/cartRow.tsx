import { Dispatch } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import {
  handleDeleteItem,
  handleQuantityChange,
} from "../../redux/actions/cart/cartActions";

import { CartProduct } from "./cartProduct";

import { Product } from "../../mockdata/products";
import { CartAction } from "../../redux/interfaces/cart/cartInterface";

type CartRowType = {
  item: Product;
  dispatch: Dispatch<CartAction>;
};

export const CartRow = ({ item, dispatch }: CartRowType) => {
  return (
    <Row className="align-items-center">
      <Col lg="6" md="6" sm="6" xs="6">
        <CartProduct
          productName={item.productName}
          cost={item.cost}
          productImage={item.productImage}
        ></CartProduct>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <FormControl
          value={item.quantity}
          onChange={(e) =>
            handleQuantityChange(
              dispatch,
              item.productId,
              isNaN(Number(e.target.value)) ? 0 : parseInt(e.target.value)
            )
          }
          type="number"
          min={1}
          max={9}
          style={{ maxWidth: 64 }}
        ></FormControl>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <span>${item.cost * item.quantity}</span>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <Button onClick={() => handleDeleteItem(dispatch, item.productId)}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
