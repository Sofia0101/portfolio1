import React from 'react';


const Myproyect = ({titulo, parrafo, subtitulo, imagen}) => {
  return (



    <div className="myproyects_list" >
      <div className="proyect_img">
        <img src={imagen} alt="proyect" />
      </div>
      <div className="contenido_proyectos">
        <h4>{titulo}</h4>
        <h1>
          {subtitulo}
        </h1>
        <p>
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