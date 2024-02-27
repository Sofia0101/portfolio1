import { Fade } from "react-awesome-reveal";


function Aboutme() {
    return (
      <section className="about-me">
        <div className="aboutme_div">
          <h3 className="title_aboutme">About me</h3>
        <Fade direction="down">  <p className="aboutme_p">
        I was born in 1998 in Buenos Aires, Argentina <br />
       I think web design can be more diverse and inspiring☄️ <br />
       My aspiration is to present the possibilities of web design​​​. <br />
       The activities that I enjoy the most are listening to music and singing, which encourage me to find new ideas💡​<br /> A long time ago I entered the world of programming, and since then I haven't stopped learning, working and having fun with it!
          :)
          </p></Fade>
        </div>
      </section>
    );
  }
  
  export default Aboutme;
 