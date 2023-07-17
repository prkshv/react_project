import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import "./Styles.css";

function Cart(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            // return(

            <ListGroup.Item>
              <Row>
                <Col>
                  {/* <Col md={2}> */}
                  <span>{prod.name}</span>
                </Col>
              </Row>
            </ListGroup.Item>

            // )
          ))}
        </ListGroup>
      </div>
      <div className="filter-summary">
        <span className="title">Subtotal({cart.length}) items</span>
        <span style={{ fontWeight: "700px", fontSize: "20px" }}>{total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
