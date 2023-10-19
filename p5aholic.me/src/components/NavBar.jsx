import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">/</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="primer_link" href="#home">Home</Nav.Link>
        <Nav.Link className="seg_link"href="#features">Features</Nav.Link>
        <Nav.Link className="ter_link" href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Navi;
