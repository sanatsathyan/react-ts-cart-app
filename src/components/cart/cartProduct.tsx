import { Row, Col } from "react-bootstrap";

type Props = {
  productName: string;
  productImage: string;
  cost: number;
};

export const CartProduct = ({ productName, cost, productImage }: Props) => {
  return (
    <Row>
      <Col lg="auto" md="auto" sm="auto" xs="auto">
        <img alt="Product" src={productImage} height={48} width={48} />
      </Col>
      <Col>
        <Row>
          <Col>
            <span>{productName}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>${cost}</small>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
