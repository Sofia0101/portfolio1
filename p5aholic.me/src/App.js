import InfoHeader from "./components/info-header";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Proyects from "./components/proyects";
import Info from "./components/info";
import Contacto from "./components/contact";
import Navi from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/cards.css"




function App() {
  return (
    <> 
    <div>
    <div style={{ 
      // backgroundImage: `url("https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, 
      // backgroundRepeat: "no-repeat",
      backgroundColor: "black"
    }}>
    
    <Navi />

      <Header />

      <InfoHeader />
      <main class="content" id="Content" data-scroll="area"></main>
      <div class="content_inner" data-scroll="target"></div>
      <Aboutme />
      <Proyects />
      <Info />
      <Contacto />
      </div>
    </div>
    </>
  );
}

export default App;
