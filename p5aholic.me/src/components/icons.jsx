import imagen3 from "../img/insta.png";
import imagen2 from "../img/gh.png";
import imagen1 from "../img/linkedin1.png";
import imagen4 from "../img/emaill.png";


function Info(props) {
  return (
    <div className="icons__list" id="icons">
      <div>
        <img className="linkedin_icon" src={imagen1} alt="linkedin" />
      </div>
      <div>
        <img className="github_icon" src={imagen2} alt="github" />
      </div>
      <div>
        <img className="instagram_icon" src={imagen3} alt="instagram" />
      </div>
      <div>
        <img className="instagram_icon" src={imagen4} alt="email" />
      </div>
    </div>
  );
}

export default Info;
