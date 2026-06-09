import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Section Heading */}
      <h1 className="about__title">
        About Me
      </h1>

      {/* Two-column layout */}
      <div className="about__content">

        {/* About Me */}
        <div className="about__text">
          <p>
            I’m Elijah, a software engineer passionate about building clean and
            efficient apps with React, Node.js, and good UI/UX.
          </p>

          <p>
            I thrive at the intersection of creativity and logic, where layout
            decisions meet clean, maintainable code, and every pixel has a
            purpose.
          </p>

          <p>
            My focus is on JavaScript, React, and modern web practices that
            prioritize performance, usability, and accessibility.
          </p>
        </div>

        {/* Skills */}
        <div className="about__skills">
          <h2 className="about__subtitle">
            My Skills
          </h2>

          <ul className="about__skills-list">
            <li className="about__skill">HTML5</li>
            <li className="about__skill">CSS</li>
            <li className="about__skill">JavaScript</li>
            <li className="about__skill">MongoDB</li>
            <li className="about__skill">Express</li>
            <li className="about__skill">React</li>
            <li className="about__skill">Node.js</li>
            <li className="about__skill">TailwindCSS</li>
            <li className="about__skill">Responsive Design</li>
            <li className="about__skill">Git</li>
            <li className="about__skill">GitHub</li>
            <li className="about__skill">Terminal</li> 
            <li className="about__skill">AI Integration</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;