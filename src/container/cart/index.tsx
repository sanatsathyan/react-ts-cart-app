import { useReducer } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { cartReducer } from "../../redux/reducers/cart/cartReducer";

import { Cart } from "./cart";
import { products } from "../../mockdata/products";

export const MyCart = () => {
  const [items, dispatch] = useReducer(cartReducer, products);

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h3>My Cart</h3>
        </Col>
      </Row>
      <Card className="p-3">
        <Cart products={items} dispatch={dispatch}></Cart>
      </Card>
    </Container>
  );
};
