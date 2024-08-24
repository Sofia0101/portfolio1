import "./css/navBar.css";
import "./css/App.css";
import "./css/background.css";
import "./css/contact.css";
import "./css/projects.css";
import "./css/description.css"
import "./css/aboutme.css";
import "./css/body.css"
import "bootstrap/dist/css/bootstrap.min.css";


import Projects from "./components/projects";
import Info from "./components/contact";
import Navi from "./components/NavBar";
import Aboutme from "./components/aboutme";
import Description from "./components/description";
import { Routes, Route } from 'react-router-dom';





function App() {
  return (
    <>
  
  <div className="bg-home">
          <Navi />
          <Routes>
          <Route path="/" element={<Description />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="/home" element={<Description />} />
          <Route path="/projects" element={<Projects />} />

                   </Routes>
               <Info />
               </div>

    </>
  );
}

export default App;
