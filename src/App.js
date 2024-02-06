import "./css/navBar.css";
import "./css/aboutMe.css";
import "./css/header.css";
import "./css/background.css";
import "./css/contact.css";
import "./css/icons.css";
import "./css/proyects.css";
import "./css/description.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Proyects from "./components/proyects";
import Info from "./components/icons";
import Navi from "./components/NavBar";
import Description from "./components/description";

function App() {
  return (
    <>
      <section className="back__img">
        <div>
          <Navi />
          <Header />
          <main className="content" id="Content" data-scroll="area"></main>
          <div className="content_inner" data-scroll="target"></div>
          <Aboutme />
          <Proyects />
          <Description />
          <Info />
        </div>
      </section>
    </>
  );
}

export default App;
