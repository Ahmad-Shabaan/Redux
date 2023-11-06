import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

export const Product = ({ product, title, price, image }) => {
  const dispatch = useDispatch();

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} $</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </Button>
          {product.quantity > 1 ? (
            <Card.Text>{product.quantity}</Card.Text>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
