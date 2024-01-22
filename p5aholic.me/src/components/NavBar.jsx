import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar bg="highlight" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="pr_link" href="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="seg_link" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ter_link" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
