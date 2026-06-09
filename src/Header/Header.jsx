import "./Header.css"; 



function Header() {
return(
    <div className="header">
         <nav className="header__nav">
     {/*    <a
          href="#home"
          className="header__link"
        >
          Home
        </a> */}
        <a
          href="#about"
          className="header__link"
        >
          About
        </a>
        <a
          href="#projects"
          className="header__link"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="header__link"
        >
          Contact
        </a>
        <a
          href="/PortfolioV2/FINALIZED_TECH_RESUME(V3F).pdf"
          download
          className="header__link"
        >
          Download Resume
        </a>
      </nav>
    </div>
)
}


export default Header;