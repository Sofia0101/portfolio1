'use client'
import { createContext } from 'react'

import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import { Nav } from 'react-bootstrap';

import Navi from '@/components/NavBar';
import "@/css/aboutme1.css";
import "@/css/navBar.css";
import "@/css/background.css";

function Aboutme() {
    return (
      <section className="back__img">

      <section className="about-me">
        {/* <Navi /> */}
        <h3 className="title_aboutme">About me</h3>
        <div className="aboutme_div">
         <div className="title-desc"> 
        <Fade direction="down">  <p className="aboutme_p">
        I was born in 1998 in Buenos Aires, Argentina <br />
       I think web design can be more diverse and inspiring☄️ <br />
       My aspiration is to present the possibilities of web design​​​. <br />
       The activities that I enjoy the most are listening to music and singing, which encourage me to find new ideas💡​<br /> A long time ago I entered the world of programming, and since then I haven't stopped learning, working and having fun with it!
          
          </p>
        </Fade>
          </div>
          <Player src="https://lottie.host/7994e0c1-3126-4292-b670-d341d8b821bd/swAlSDCvfR.json" 
        className="player2"
          loop
          autoplay
          style={{ width: "460px" } }
          />
       
          </div>     
      
        
      </section>
      </section>

    );
  }
  
  export default Aboutme;
 