import React from 'react';


const Myproyect = ({titulo, parrafo, subtitulo, imagen, hreflink}) => {
  return (



    <div className="myprojects_list" data-page="projects">
      
      <div className="project_img">
      <a className='link-proj' href={hreflink}>
        <img className='proj-img' src={imagen} alt="project" />
        </a>
      </div>
      <div className="contenido_proyectos">
        <h4>{titulo}</h4>
        <h1>
          {subtitulo}
        </h1>
        <p className='myprojects_p'>
         {parrafo}
        </p>
      </div>
    </div>

        );
      }















//     <div className="gpt3__features-container__feature">
//     <div className="gpt3__features-container__feature-title">
//       <div />
//       <h1>{titulo}</h1>
//     </div>
//     <div className="gpt3__features-container_feature-text">
//       <p>{parrafo}</p>
//     </div>
//   </div>

  
export default Myproyect;