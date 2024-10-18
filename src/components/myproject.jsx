import React from "react";

const Myproyect = ({ titulo, parrafo, subtitulo, imagen, hreflink }) => {
  return (
    <div className="myprojects_list" data-page="projects">
      <div className="button-74" role="button">
        <a href={hreflink}>
          {" "}
          <button>{titulo}</button>
        </a>
      </div>
    </div>
  );
};

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
