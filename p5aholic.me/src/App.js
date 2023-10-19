import "./css/cards.css";
import"./css/linksHeader.css";
import "./css/navBar.css"
import "./css/aboutMe.css"
import"./css/header.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Proyects from "./components/proyects";
import Info from "./components/premios";
import Contacto from "./components/contact";
import Navi from "./components/NavBar";
import LinksHeader from "./components/linksHeader";



function App() {
  return (
    <>
      <div>
        <div
          style={{
            // backgroundImage: `url("https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            // backgroundRepeat: "no-repeat",
            backgroundColor: "white",
          }}
        >
          <Navi />
          <Header />
          <main class="content" id="Content" data-scroll="area"></main>
          <div class="content_inner" data-scroll="target"></div>
          <Aboutme />
          <LinksHeader />
          <Proyects />
          <Info />
          <Contacto />
        </div>
      </div>
    </>
  );
}

export default App;
