import "./Footer.css";  
import githubLogo from "../assets/github-logo-transparent.png"; 
import linkedInLogo from "../assets/linkedin-logo-3.png"

const Footer = () => {
  return (
    <div className="footer">
      <p className="">
    © Elijah Williams 2026
      </p> 

      {/* Links to socials */}
      <div className="footer__links">
        <a href="https://github.com/ElijahSWilliams">
            <img src={githubLogo} className="footer__link-github" />
        </a>
        <a href="https://github.com/ElijahSWilliams">
            <img src={linkedInLogo} className="footer__link-linkedIn" />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
