import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/products"}>
            Products
          </Nav.Link>
          <Nav.Link as={Link} to={"/dd"}>test fake url </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
