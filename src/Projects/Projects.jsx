import "./Projects.css";

const projects = [
  {
    Title: "Spotify Web Quiz",
    Description:
      "A Quiz Game App that fetches the user's Spotify data to showcase the songs.",
    Tech: ["React", "CSS"],
    Link: "https://elijahswilliams.github.io/SongQUIZ/",
    Repo: ["https://github.com/ElijahSWilliams/SongQUIZ"],
  },
  {
    Title: "What's the Weather (Frontend/Backend)",
    Description:
      "A web app that fetches weather data and displays it dynamically.",
    Tech: ["React", "CSS"],
    Link: "https://elijahswilliams.github.io/se_project_react/",
    Repo: ["N/A"],
  },
  {
    Title: "EnhancedByLuz ",
    Description:
      "A frontend website that showcases the services of a nail salon and allows users to book appointments online.",
    Tech: ["React", "CSS", "NPM"],
    Link: "https://enhancedbyluz.vercel.app/",
    Repo: ["N/A"],
  },
  {
    Title: "AWCleaning",
    Description:
      "A cleaning service platform that uses AI to recommend services and provide instant pricing estimates based on customer needs.",
    Tech: ["React", "Node.js"],
    /*  Tools: ["GroqAi"], */
    Link: "https://elijahswilliams.github.io/AWCLEANING/",
    Repo: ["https://github.com/ElijahSWilliams/AWCLEANING"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>

      <div className="projects__grid">
        {[...projects].reverse().map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-card__title">{project.Title}</h2>

            <p className="project-card__description">{project.Description}</p>

            <p className="project-card__tech">
              <span className="project-card__label">Tech:</span>{" "}
              {project.Tech.join(", ")}
            </p>

            <p className="project-card__link">
              <a href={project.Link} target="_blank" rel="noreferrer">
                Visit Site →
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
