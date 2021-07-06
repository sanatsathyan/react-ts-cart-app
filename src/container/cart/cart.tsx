import React, { Dispatch } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { CartRow } from "../../components/cart/cartRow";
import { handleCheckout } from "../../redux/actions/cart/cartActions";

import { Product } from "../../mockdata/products";
import { CartAction } from "../../redux/interfaces/cart/cartInterface";

type CartType = {
  products: Product[];
  dispatch: Dispatch<CartAction>;
};

export const Cart = ({ products, dispatch }: CartType) => {
  const totalCost: number = products.reduce(
    (current: number, item: Product) => {
      return current + item.quantity * item.cost;
    },
    0
  );

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h5>Items in Cart</h5>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg="8">
          <Card className="p-2">
            <Row className="align-items-center mb-2">
              <Col lg="6" md="6" sm="6" xs="6">
                <b>Product</b>
              </Col>
              <Col lg="2" md="2" sm="2" xs="2">
                <b>Qty</b>
              </Col>
              <Col lg="2" md="2" sm="2" xs="2">
                <b>Total</b>
              </Col>
              <Col lg="2" md="2" sm="2" xs="2"></Col>
            </Row>
            {products.length > 0 ? (
              products.map((item) => (
                <div key={item.productId}>
                  <hr className="my-2" />
                  <CartRow item={item} dispatch={dispatch}></CartRow>
                </div>
              ))
            ) : (
              <span>No items in the cart!</span>
            )}
          </Card>
        </Col>
        <Col lg="4" className="text-center">
          <h4>Total</h4>
          <h5>${totalCost}</h5>
          {products.length > 0 && (
            <Button onClick={() => handleCheckout(products)}>Checkout</Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};
