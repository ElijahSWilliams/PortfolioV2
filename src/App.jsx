import { useState } from 'react'
import './App.css' 
import Header from './Header/Header'
import Hero from './Hero/Hero' 
import { useEffect } from 'react' 
import About from './About/About'
import Projects from './Projects/Projects' 
import Contact from './Contact/Contact'


function App() {
  const [count, setCount] = useState(0) 


  /* Cursor effect */
  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };


  /* Remove cursor effect */
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
    <Header /> 
    <Hero /> 
    <About /> 
    <Projects /> 
    <Contact />

    
       
    </>
  )
}

export default App
