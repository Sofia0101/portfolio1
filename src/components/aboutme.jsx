import { Fade } from "react-awesome-reveal";

import { Player } from "@lottiefiles/react-lottie-player";

function Aboutme() {
    return (
      <section className="about-me" data-page="aboutme"><h3 className="text-focus-in title_aboutme">About me</h3>
        <div className="aboutme_div">
         <div className="title-desc"> 
        <Fade direction="down">  <p className="aboutme_p">
        I was born in 1998 in Buenos Aires, Argentina 🇦🇷<br />
       I think web design can be more diverse and inspiring. <br />
       My aspiration is to present the possibilities <br />of web design​​​.
       The activities that I enjoy the most are listening to music and singing, which encourage me to find new ideas.<br /> A long time ago I entered the world of programming, and since then I haven't stopped learning, working and having fun with it!
    
          </p>
        </Fade>
          </div>
          <Player src="https://lottie.host/2875bdf3-a52c-4ffd-9409-810ab234c6b5/c4CJ55VL8Q.json" 
        className="player2"
          loop
          autoplay
          style={{ width: "460px" } }
          />
       
          </div>     
      
        
      </section>
    );
  }
  
  export default Aboutme;
 