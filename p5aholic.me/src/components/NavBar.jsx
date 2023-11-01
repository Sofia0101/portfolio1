import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar bg="highlight" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className="pr_link" href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="seg_link"href="#features">Projects</Nav.Link>
        <Nav.Link className="ter_link" href="#pricing">Contact</Nav.Link>
        <Nav.Link className="cuar_link" href="#home">Info</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  );
}

export default Navi;
