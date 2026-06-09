import { useState } from "react";
import "./Header.css"; 

/* UPDATE PORTFOLIO LINK IN RESUME*/
/* MAKE RESPONSIVE ON MOBILE DEVICES */


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">

      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
            <a href="#about" className="header__link">About</a>
            <a href="#projects" className="header__link">Projects</a>
            <a href="#contact" className="header__link">Contact</a>
           <a
              href="/PortfolioV2/FINALIZED_TECH_RESUME(V3F).pdf"
              download
              className="header__link"
            >
              Download Resume
            </a>
          
      </nav>

    </header>
  );
}

export default Header;