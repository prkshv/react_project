import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

function Header(props) {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
      <Container>
        <Navbar.Brand href="#home">E-Cart</Navbar.Brand>
        <Link to="/">H Shopping cart</Link>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: "500px" }}
            placeholder="Search Product"
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav className="nav1">
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FiShoppingCart
                style={{ fontSize: 30 }}
                color="white"
                className="p-1"
              />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "370px" }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => {
                    return (
                      <span key={prod.id} className="cartitem">
                        <img
                          className="cartItemImg"
                          src={prod.image}
                          alt={prod.name}
                        />
                        <div className="cartItemDetails">
                          <span>{prod.name}</span>
                          <span>Rs.{prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            });
                          }}
                        />
                      </span>
                    );
                  })}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: "10px" }}>Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
