import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar bg="highlight" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="pr_link" href="/">
          Home
        </Navbar.Brand>
    
          <Nav.Link className="seg_link hover-3" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ter_link hover-3" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link className="cuarto_link hover-3" href="/aboutme">
            About me
          </Nav.Link>
   
      </Container>
    </Navbar>
  );
}

export default Navi;
