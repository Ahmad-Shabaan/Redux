import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const total = carts.reduce((acc, ele) => {
    acc += ele.price * ele.quantity;
    return acc;
  }, 0);
  return (
    <>
      <h2 style={{ color: "white", margin: "70px 0 20px 10px" }}>
        Total Price : {total.toFixed(2)} $
      </h2>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Img</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => {
            return (
              <tr key={cart.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={cart.image}
                    alt="cart"
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{cart.title}</td>
                <td>{cart.price} $</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ marginRight: "8px" }}
                    onClick={() => dispatch(increaseQuantity(cart))}
                  >
                    +
                  </Button>

                  {cart.quantity}
                  <Button
                    variant="primary"
                    style={{ marginLeft: "8px" }}
                    onClick={() => dispatch(decreaseQuantity(cart))}
                  >
                    -
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(removeFromCart(cart.id));
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {carts.length > 1 ? (
          <tfoot>
            <tr>
              <td>
                <Button
                  onClick={() => {
                    dispatch(clearCart());
                  }}
                  variant="danger"
                >
                  Clear All
                </Button>
              </td>
            </tr>
          </tfoot>
        ) : (
          ""
        )}
      </Table>
    </>
  );
};
export default Cart;
