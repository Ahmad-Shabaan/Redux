import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import productImg from "../assets/download.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTitle,
  changeDescription,
  changePrice,
} from "../redux/features/templatesSlcie";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const templateNum = 0;
  const template = useSelector((state) => state.templates[templateNum]);
  const productsSection = template.ProductsSection;
  return (
    <Container className="my-5 py-5">
      <Row>
        <h2 style={{ color: "white" }}>Template 1</h2>
        <Col
          style={{
            border: "1px solid #ddd",
            borderRadius: "15px",
            color: "white",
          }}
          className="productReview"
        >
          <div>
            <label htmlFor="title">Enter your title as you like</label>
            <input
              type="text"
              id="title"
              onChange={(e) =>
                dispatch(changeTitle({ templateNum, title: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="description">
              Enter your description as you like
            </label>
            <input
              type="text"
              id="description"
              onChange={(e) =>
                dispatch(
                  changeDescription({
                    templateNum,
                    description: e.target.value,
                  })
                )
              }
            />
          </div>
          <div>
            <label htmlFor="price">Enter your price as you like</label>
            <input
              type="text"
              id="price"
              onChange={(e) =>
                dispatch(changePrice({ templateNum, price: e.target.value }))
              }
            />
          </div>
          <div>
            <Link
              to="/result"
              className="nav-link"
              style={{
                backgroundColor: "blueviolet",
                padding: "10px",
                borderRadius: "10px",
              }}
              onClick={() =>
                localStorage.setItem("templates", JSON.stringify([template]))
              }
            >
              Save All Changes
            </Link>
          </div>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={productImg} />
            <Card.Body>
              <Card.Title>{productsSection.title}</Card.Title>
              <Card.Text>{productsSection.price} $</Card.Text>
              <Card.Text>{productsSection.description} </Card.Text>

              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
