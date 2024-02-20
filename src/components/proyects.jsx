import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import imagenOrg from "../img/org.jpeg";
import imagenApeperia from "../img/apeperia.jpeg";
import imagenGpt3 from "../img/imagenGpt3.jpeg";

import Myproyect from "./myproyect";

function Proyects() {
  return (
    <div className="proyectos_components" id="projects">
      <div className="primerproyecto">
        <Myproyect
          titulo="GPT-3"
          parrafo="Let's build something amazing with GPT-3 OpenAI"
          imagen={imagenGpt3}
          hreflink="https://google.com"
        />
      </div>
      <div className="segundoproyecto">
        <Myproyect
          titulo="Org"
          parrafo="Proyecto realizado con React
          ."
          imagen={imagenOrg}
          hreflink="https://org-tau-ashy.vercel.app"
        />
      </div>
      <div className="tercerproyecto">
        <Myproyect
          titulo="Apeperia"
          parrafo="cequisul
          Born in 1998 in Buenos Aires, Argentina."
          imagen={imagenApeperia}
          hreflink="https://ap-shop.vercel.app"
          
        />
      </div>
    </div>
  );
}

export default Proyects;

{
  /* //   <section className='cards_content' id='projects'>

// <div className='card1' >
// <Card style={{ width: '18rem', height: "21rem" }}>
//   <Card.Img variant="top" src={imagen1} />

//   <Card.Body>
    
//     <Card.Title>Projects (Design & Develop)</Card.Title>
//     <Card.Text>
//     2023 / Commission / Special
//     </Card.Text>
//     <Button variant="dark">Project</Button>
//   </Card.Body>
// </Card>
// </div>

// <div className='card2'>
// <Card style={{ width: '18rem', height: "21rem"}}>
// <Card.Img variant="top" src={imagen1} />
//   <Card.Body>
//     <Card.Title>BNN Online Store</Card.Title>
//     <Card.Text>
//     2023 / Commission / Corporate
//     </Card.Text>
//   <Button href='https://org-tau-ashy.vercel.app' variant="dark">Project</Button>
//   </Card.Body>
// </Card>
// </div>

// <div className='card3'>
// <Card style={{  width: '18rem',height: "21rem" }}>
// <Card.Img variant="top" src={imagen1} />
//   <Card.Body>
//     <Card.Title>ILY GIRL</Card.Title>
//     <Card.Text>
//     2023 / Commission / Special
//     </Card.Text>
//     <Button variant="dark">Project</Button>
//   </Card.Body>
// </Card>
// </div>

// </section> */
}