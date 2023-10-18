import "./App.css";
import InfoHeader from "./components/info-header";
import Header from "./components/header";
import Aboutme from "./components/aboutme";

function App() {
  return (
    <div>
      <Header />

      <InfoHeader />
      <main class="content" id="Content" data-scroll="area"></main>
      <div class="content_inner" data-scroll="target"></div>
      <Aboutme />
    </div>
  );
}

export default App;
