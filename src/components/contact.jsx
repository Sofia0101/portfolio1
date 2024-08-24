import imagen3 from "../img/insta.png";
import imagen2 from "../img/gh.png";
import imagen1 from "../img/linkedin1.png";
import imagen4 from "../img/emaill.png";


function Info(props) {
  return (
    <>
     <div className="contactme">
       <h2 className="contactme">Contact me:</h2>
       </div>
    <div className="icons__list" id="contact">
      <div>
      <a href="https://www.linkedin.com/in/sofía-fornaroli

"><img className="linkedin_icon" src={imagen1} alt="linkedin" /></a>  
      </div>
      <div>
        <a href="https://github.com/Sofia0101"><img className="github_icon" src={imagen2} alt="github" /></a>
      </div>
      <div>
      <a href="https://www.instagram.com/sofiafornaroli/">  <img className="instagram_icon" src={imagen3} alt="instagram" /></a>
      </div>
      <div>
       <a href="mailto: sofiafornaroli98@gmail.com"> <img className="email_icon" src={imagen4} alt="email" /></a>
      </div>
   
    </div>
      
        </>
  );
}

export default Info;
