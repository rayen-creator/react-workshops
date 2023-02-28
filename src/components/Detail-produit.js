import { useParams } from "react-router-dom";
import listproducts from "../products.json";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export function Detail_produit() {
  const { name } = useParams();
  const product = listproducts.find((product) => product.name === name);
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={require("../assets/images/" + product.img)}
            alt="Product Img"
            height="300"
          />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h1>{product.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Description</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{product.description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Price</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{product.price} DT</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Likes</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{product.like}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
