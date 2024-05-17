'use client'
import { createContext } from 'react'

// import Placeholder from "react-bootstrap/Placeholder";
// import imagenOrg from "@/img/org.jpeg";
// import imagenApeperia from "@/img/apeperia.jpeg";
// import imagenGpt3 from "@/img/imagenGpt3.jpeg";

import Myprojects from '@/components/Myprojects';

function Projects() {
  return (
    
    <div className="proyectos_components" id="projects">
      <h3 className="my-projects-title">My projects</h3>
      
      <div className="primerproyecto">
        <Myprojects
          titulo="GPT-3"
          subtitulo={""}
          parrafo=""
          imagen="/img/imagenGpt3.jpeg"
          hreflink="https://gpt-3.vercel.app"
        />
      </div>
      <div className="segundoproyecto">
        <Myprojects 
        
          subtitulo={""}
          titulo="Org"
          parrafo=""
          imagen="/img/org.jpeg"
          hreflink="https://org-tau-ashy.vercel.app"
        
        />
      </div>
      <div className="tercerproyecto">
        <Myprojects
          titulo="Apeperia"
          subtitulo={""}
          parrafo=""
          imagen="/img/apeperia.jpeg"
          hreflink="https://ap-shop.vercel.app"
          
        />
      </div>
    </div>
  );
}

export default Projects;

