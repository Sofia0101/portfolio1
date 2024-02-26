import Placeholder from "react-bootstrap/Placeholder";

import imagenOrg from "../img/org.jpeg";
import imagenApeperia from "../img/apeperia.jpeg";
import imagenGpt3 from "../img/imagenGpt3.jpeg";

import Myproyect from "./myproyect";

function Proyects() {
  return (
    
    <div className="proyectos_components" id="projects">
      <h3 className="my-projects-title">My projects<h1 className="palito">|</h1></h3>
      
      <div className="primerproyecto">
        <Myproyect
          titulo="GPT-3"
          parrafo=""
          imagen={imagenGpt3}
          hreflink="https://gpt-3.vercel.app"
        />
      </div>
      <div className="segundoproyecto">
        <Myproyect
          titulo="Org"
          parrafo=""
          imagen={imagenOrg}
          hreflink="https://org-tau-ashy.vercel.app"
        />
      </div>
      <div className="tercerproyecto">
        <Myproyect
          titulo="Apeperia"
          parrafo=""
          imagen={imagenApeperia}
          hreflink="https://ap-shop.vercel.app"
          
        />
      </div>
    </div>
  );
}

export default Proyects;

