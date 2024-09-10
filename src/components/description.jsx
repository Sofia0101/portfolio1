
import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import TypeIt from "typeit-react";
import curriculum from "../img/cv.pdf";



function Description() {
  return (
    <section className="page" data-page="home" >
      <Fade>
        <div className="my-desc">
            <h1 className="home_name">
              Hi! I'm <br /> Sofía Fornaroli <br />
              Welcome to my 
            </h1>
            <h1 className="home_name2" >portfolio</h1>
            <p className="home_description">

            <TypeIt>  I'm a Frontend Developer from Argentina</TypeIt>
          </p>
        </div>
      </Fade>

      <div className="animation home">
        <Player
          src="https://lottie.host/03b99df9-d50c-4051-b460-4690ce245deb/TCUIusZvjE.json"
          className="player"
          loop
          autoplay
          style={{ width: "300px" }}
        />
        
       
      </div>

    {/* <div className="curriculum">
      <button>
        <a download={curriculum} href="">Download my CV</a>
      </button>

      
    </div> */}

    </section>
  );
}

export default Description;
