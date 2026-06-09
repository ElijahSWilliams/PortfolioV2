import { useState } from 'react'
import './App.css' 
import Header from './Header/Header'
import Hero from './Hero/Hero' 
import { useEffect } from 'react' 
import About from './About/About'
import Projects from './Projects/Projects' 
import Contact from './Contact/Contact'
import Footer from './Footer/Footer' 
import githubLogo from "../src/assets/github-logo.png"; 
import linkedInLogo from "../src/assets/linkedin-logo-3.png"


function App() {
  const [count, setCount] = useState(0) 




  return (
    <>  

{/*       <div className="tab__links">
        <a href="https://github.com/ElijahSWilliams" target="_blank">
            <img src={githubLogo} className="tab__link-github" />
        </a>
        <a href="https://www.linkedin.com/in/elijah-williams16/" target="_blank">
            <img src={linkedInLogo} className="tab__link-linkedIn" />
        </a>
        
      </div> */}


    <section id="home">
    <Header /> 
    </section> 

    <section id="hero">
    <Hero /> 
    </section> 

    <section id="about">
    <About /> 
    </section> 

    <section id="projects">
    <Projects /> 
    </section> 
    
    <section id="contact">
    <Contact />
    </section> 

    <section id="footer">
      <Footer />
    </section> 

    
       
    </>
  )
}

export default App
