import "./css/navBar.css";
import "./css/background.css";
import "./css/contact.css";
import "./css/icons.css";
import "./css/proyects.css";
import "./css/description.css"
import "./css/aboutme1.css";
import "./css/body.css"
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./components/header";
import Proyects from "./components/proyects";
import Info from "./components/icons";
import Navi from "./components/NavBar";
import Aboutme from "./components/aboutMe1";
import Description from "./components/description1";




function App() {
  return (
    <>
      <section className="back__img">
        <div>
          <Navi />
          <main className="content" id="Content" data-scroll="area"></main>
          <div className="content_inner" data-scroll="target"></div>
          <Description />
           <Proyects /> 
          <div className="back-aboutme">
          <Aboutme />
          
          <Info />
        </div>
         </div>
      </section>
    </>
  );
}

export default App;
