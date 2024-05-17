
import Image from "next/image";

function Info() {
  return (
    <div className="icons__list" id="contact">
      <div>
      <a href="https://www.linkedin.com/in/sofía-fornaroli">
        <Image className="linkedin_icon" src="/img/linkedin.png" alt="linkedin" height={37} width={37} />
      </a>  
      </div>
      <div>
        <a href="https://github.com/Sofia0101">
        <Image className="github_icon" src="/img/gh.png" alt="github" height={37} width={37} />

        </a>
      </div>
      <div>
      <a href="https://www.instagram.com/sofiafornaroli/">
      <Image className="instagram_icon" src="/img/insta.png" alt="instagram" height={37} width={37} />
      </a>
      </div>
      <div>
       <a href="mailto: sofiafornaroli98@gmail.com">
       <Image className="email_icon" src="/img/email.png" alt="email" height={37} width={37} />
        </a>
      </div>
    </div>
  );
}

export default Info;
