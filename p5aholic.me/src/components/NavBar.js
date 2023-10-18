import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Sofía Fornaroli</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Navi;
