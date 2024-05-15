'use client'
import { createContext } from 'react'

import Placeholder from "react-bootstrap/Placeholder";
import imagenOrg from "@/img/org.jpeg";
import imagenApeperia from "@/img/apeperia.jpeg";
import imagenGpt3 from "@/img/imagenGpt3.jpeg";

import Myproject from "@/components/Myprojects";

function Projects() {
  return (
    
    <div className="proyectos_components" id="projects">
      <h3 className="my-projects-title">My projects</h3>
      
      <div className="primerproyecto">
        <Myproject
          titulo="GPT-3"
          parrafo=""
          imagen={imagenGpt3}
          hreflink="https://gpt-3.vercel.app"
        />
      </div>
      <div className="segundoproyecto">
        <Myproject
          titulo="Org"
          parrafo=""
          imagen={imagenOrg}
          hreflink="https://org-tau-ashy.vercel.app"
        />
      </div>
      <div className="tercerproyecto">
        <Myproject
          titulo="Apeperia"
          parrafo=""
          imagen={imagenApeperia}
          hreflink="https://ap-shop.vercel.app"
          
        />
      </div>
    </div>
  );
}

export default Projects;

