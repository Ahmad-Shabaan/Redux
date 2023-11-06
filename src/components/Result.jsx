import { Col, Container, Row } from "react-bootstrap";
import productImg from "../assets/download.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
export const Result = () => {
  const templateNum = 0;
  const template = useSelector((state) => state.templates[templateNum]);
  const productsSection = template.ProductsSection;
  return (
    <Container className="py-5 my-5">
      <Row>
        <h2 style={{ color: "white" }}>Final Template</h2>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={productImg} />
            <Card.Body>
              <Card.Title>{productsSection.title}</Card.Title>
              <Card.Text>{productsSection.description} $</Card.Text>
              <Card.Text>{productsSection.price} $</Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
