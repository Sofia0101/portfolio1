import React from "react";
import "../css/projectsII.css";
 
export default function NewProjects(titulo, parrafo, subtitulo, imagen, hreflink) {
  return (
    <div className="projects2">

<h3 className="text-focus-in my-projects-title">Some of my projects</h3>


<div className="button-74"role="button">
   
   <a href="https://form-omega-self.vercel.app"> <button>
   Form</button></a>
</div>

    <div className="button-74"role="button">
   
        <a href="https://belocopy.vercel.app"> <button>
        Belo</button></a>
    </div>

<div className="button-74"role="button">
   
<a href="https://gpt-3.vercel.app"> <button>
GPT-3</button></a>
</div>

<div className="button-74"role="button">
   
   <a href="https://org-tau-ashy.vercel.app"> <button>
   Org</button></a>
</div>

<div className="button-74"role="button">
   
   <a href="https://ap-shop.vercel.app"> <button>
   Apeperia</button></a>
</div>

    </div>

  );
}
