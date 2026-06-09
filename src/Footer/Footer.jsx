import "./Footer.css";  
import githubLogo from "../assets/github-logo.png"; 
import linkedInLogo from "../assets/linkedin-logo-3.png"

const Footer = () => {
  return (
    <div className="footer">
      <p className="">
    © Elijah Williams 2026
      </p> 

      {/* Links to socials */}
      <div className="footer__links">
        <a href="https://github.com/ElijahSWilliams" target="_blank">
            <img src={githubLogo} className="footer__link-github" />
        </a>
        <a href="https://www.linkedin.com/in/elijah-williams16/" target="_blank">
            <img src={linkedInLogo} className="footer__link-linkedIn" />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
