import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import "./Styles.css";
import { AiFillDelete } from "react-icons/ai";

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
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.price}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.ratings}</span>
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    onClick={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                    />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>

            // )
          ))}
        </ListGroup>
      </div>
      <div className="filter-summary">
        <span className="title">Subtotal({cart.length}) items</span>
        <span style={{ fontWeight: "700px", fontSize: "20px" }}>
          Total: {total}
        </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
