import "./Hero.css"; 


function Hero() {
    return (
      <section className="hero">
        
        {/* LEFT: Identity */}
        <div className="hero__left">
          <h1 className="hero__title">Elijah Williams</h1>
  
          <h2 className="hero__subtitle">
            Full Stack Developer
          </h2>
  
          <p className="hero__text">
            Building modern web applications with React, Node, and APIs.
          </p>
  
          <div className="hero__buttons">
            <a className="hero__button hero__button--primary" href="#projects">
              View Projects
            </a>

            <a className="hero__button hero__button--secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
  
        {/* RIGHT: Visual / Theme Space */}
        <div className="hero__right">
          <div className="hero__magic-field"></div> 
        </div>
  
      </section>
    );
  }
  
  






/* 
function Hero () {
    return(
        <div className="hero">
            <h1 className="hero__title">Elijah Williams</h1> 
            <h2 className="hero__subtitle">Full Stack Developer <br></br>Building modern web applications</h2> 
            <p className="hero__text">MongoDB Express React Node</p> 

            
           /*  <div className="hero__buttons">
            <button className="hero__button hero__button-primary">View Projects</button>
            <button className="hero__button hero__button-secondary">Contact Me</button>
            </div>
        </div>   
        )
 }
    */
 
export default Hero; 
