import argentina from "../img/arg.png";

function Aboutme() {
  return (
    <section className="page" data-page="home">
      <div className="page_content home">
        <p className="home_aboutme">
       
I was born in 1998 in Buenos Aires, Argentina. <br />
I think web design can be more diverse and inspiring.
My aspiration is to present the possibilities of web design​​​☄️
The activities that I enjoy the most are listening to music and singing, which encourage me to find new ideas💡​
        </p>
        {/* <img className="arg__imagen" src={argentina} alt="Argentina" /> */}
      </div>
      {/* <div className="myproyects_title">
        <h1>My proyects</h1>
      </div> */}
    </section>
  );
}

export default Aboutme;
