import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
export const CartProduct = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(removeFromCart(id));
            }}
          >
            Remove From Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
