import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
      <Container>
        <Navbar.Brand href="#home">E-Cart</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: "500px" }}
            placeholder="Search Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FiShoppingCart
                style={{ fontSize: 30 }}
                color="white"
                className="p-1"
              />
              <Badge>8</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "370px" }}>
              <span style={{ padding: "10px" }}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
