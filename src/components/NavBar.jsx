import { Navbar, Container, Nav } from "react-bootstrap";

function Navi() {
  return (
    <div className="navbar">
    <ul class="drop-menu">
      <li className="home-li">
        <a className="pr_link" href="/">Home</a>
      </li>
      <li className="project-li">
        <a className="seg_link" href="/projects">Projects</a>
      </li>
      <li className="aboutme-li">
        <a className="ter_link" href="/aboutme">About Me</a>
      </li>
     
    </ul>
    </div>
    // <Navbar bg="highlight" data-bs-theme="light">
    //   <Container>

    //     <Navbar.Brand className="pr_link" href="/">
    //       Home
    //     </Navbar.Brand>

    //       <Nav.Link className="seg_link hover-3" href="/projects">
    //         Projects
    //       </Nav.Link>

    //       <Nav.Link className="cuarto_link hover-3" href="/aboutme">
    //         About me
    //       </Nav.Link>

    //   </Container>
    // </Navbar>
  );
}

export default Navi;
