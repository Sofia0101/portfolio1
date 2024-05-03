import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import TypeIt from "typeit-react";

function Description() {
  return (
    <section className="page" data-page="home">
      <Fade>
        <div>
          <p className="home_description">
            <h1 className="home_name">
              Hi! <br /> I'm Sofía Fornaroli
            </h1>
            <TypeIt>  I'm a Frontend Developer from <br /> Buenos Aires, Argentina</TypeIt>
          </p>
        </div>
      </Fade>

      <div className="animation home">
        <Player
          src="https://lottie.host/c76a28e1-2039-43fd-b534-28d9c8e80404/aFA3ViLYHZ.json"
          className="player"
          loop
          autoplay
          style={{ width: "300px" }}
        />
        
       
      </div>
    </section>
  );
}

export default Description;
