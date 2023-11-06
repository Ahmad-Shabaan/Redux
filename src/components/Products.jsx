import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { fetchProducts } from "../redux/services/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./Product";
import { Loading } from "./Loading";
export const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className="py-5 my-5">
      <Row>
        {state.status === "loading" ? (
          <Loading />
        ) : (
          state.products.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                product={product}
              />
            );
          })
        )}
      </Row>
    </Container>
  );
};
