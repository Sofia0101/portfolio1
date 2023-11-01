import "./css/cards.css";
import"./css/linksHeader.css";
import "./css/navBar.css";
import "./css/aboutMe.css";
import"./css/header.css";
import "./css/background.css";
import "./css/contact.css";
import "./css/info.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Proyects from "./components/proyects";
import Info from "./components/info";
import Contacto from "./components/contact";
import Navi from "./components/NavBar";
import LinksHeader from "./components/linksHeader";

const background = new URL("./img/back.jpg", import.meta.url)


function App() {
  return (
    <>
     <section className="back__img">
      <div>

    {/* <img src={background} 
    
    
    /> */}


          

          <Navi />
          <Header />
          <main className="content" id="Content" data-scroll="area"></main>
          <div className="content_inner" data-scroll="target"></div>
          <Aboutme />
          <LinksHeader />
          <Proyects />
          <Info />
          <Contacto />
        </div>
        </section>
    </>
  );
}

export default App;
