import argentina from "../img/arg.png";

import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player"; 

function Aboutme() {
  return (
    <section className="page" data-page="home">
      <div className="page_content home">
      <Fade><p className="home_aboutme">
       
I was born in 1998 in Buenos Aires, Argentina <br />
I think web design can be more diverse and inspiring☄️ <br />
My aspiration is to present the possibilities of web design​​​
The activities that I enjoy the most are listening to music and singing, which encourage me to find new ideas💡​
        </p></Fade>
        <Player
            src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
            className="player"
            loop
            autoplay
            style={{width: "300px",}}
          />
      </div>
    
      {/* <div className="myproyects_title">
        <h1>My proyects</h1>
      </div> */}
    </section>
  );
}

export default Aboutme;
