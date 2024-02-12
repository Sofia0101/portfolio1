import { Fade } from "react-awesome-reveal";
function Description() {
    return (
      <section className="description">
        <div className="description_div">
        <Fade direction="down">  <p className="description_p">
          A long time ago I entered the world of programming, and since then I haven't stopped learning, working and having fun with it! <br /> These are some of the languages ​​I learned and applied on this journey
          :)
          </p></Fade>
          {/* <img className="arg__imagen" src={argentina} alt="Argentina" /> */}
        </div>

      </section>
    );
  }
  
  export default Description;
  