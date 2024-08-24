import Placeholder from "react-bootstrap/Placeholder";

import imagenOrg from "../img/org.jpeg";
import imagenApeperia from "../img/apeperia.jpeg";
import imagenGpt3 from "../img/imagenGpt3.jpeg";
import imagenBelo from "../img/belo.jpg";

import Myproject from "./myproject";

function Projects() {
  return (
    
    <div className="proyectos_components" id="projects" data-page="projects">
      <h3 className="my-projects-title">Some of my projects</h3>
      


      <div className="00proyecto">
        <Myproject
          titulo="- BELO COPY -" className="belo" 
          parrafo="This is a page I created using Next.js, Typescript and Tailwind CSS. My goal was to create the original Belo page, using creativity to achieve components recreating the same styles of colors, typography, sizes."
          imagen={imagenBelo}
          hreflink="https://belocopy.vercel.app"
        />
      </div>

      <div className="primerproyecto">
        <Myproject
          titulo="- GPT-3 -"
          parrafo="I created the GPT-3 project using Javascript and React.js. My goal was to organize and align the components so that they would catch the eye and use a specific color scheme to achieve uniformity."
          imagen={imagenGpt3}
          hreflink="https://gpt-3.vercel.app"
        />
      </div>
      <div className="segundoproyecto">
        <Myproject
          titulo="- ORG -"
          parrafo="This project was created with Javascript, CSS and HTML. It shows the intention of creating an interactive page. My goal was to create work teams, creating a professional and eye-catching environment."
          imagen={imagenOrg}
          hreflink="https://org-tau-ashy.vercel.app"
        />
      </div>
      <div className="tercerproyecto">
        <Myproject
          titulo="- APEPERIA -"
          parrafo="Project created with Javascript, CSS and HTML.
The goal was to create an attractive interface that offers products or services, in this case programming courses.
It includes cards with prices and contact information for further information."
          imagen={imagenApeperia}
          hreflink="https://ap-shop.vercel.app"
          
        />
      </div>
    </div>
  );
}

export default Projects;

