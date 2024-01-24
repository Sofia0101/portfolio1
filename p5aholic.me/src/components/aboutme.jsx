import argentina from "../img/arg.png";

function Aboutme() {
  return (
    <section className="page" data-page="home">
      <div className="page_content home">
        <p className="home_aboutme">
          Born in 1998 in Buenos Aires, Argentina. <br /> I believe web design can be more diverse and inspiring. <br /> With a mission to present 
          the possibilities of web design. I am pursuin 
          expressions through experiments and thoughts. <br />
        </p>
        <img className="arg__imagen" src={argentina} alt="Argentina" />
      </div>
      <div className="myproyects_title">
        <h1>My proyects</h1>
      </div>
    </section>
  );
}

export default Aboutme;
