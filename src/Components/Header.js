import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
        <Container>
          <Navbar.Brand href="#home">E-Cart</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
