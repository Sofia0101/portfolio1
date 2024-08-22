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
import { Routes, Route } from 'react-router-dom';
import Myproyect from "./components/myproyect";





function App() {
  return (
    <>
  

          <Navi />
          <Routes>
          <Route path="/" element={<Description />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="/home" element={<Description />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/contact" element={<Info />} />

                   </Routes>
     
    </>
  );
}

export default App;
