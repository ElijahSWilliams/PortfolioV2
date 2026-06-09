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
      Title: "Around the US",
      Description:
        "A social media clone that allows users to add/remove, like/unlike, and upload/delete photos",
      Tech: ["Javascript", "CSS", "APIs"],
      Link: "https://elijahswilliams.github.io/se_project_aroundtheus/",
      Repo: ["N/A"],
    },
    {
      Title: "AWCleaning",
      Description:
        "Cleaning service website with a contact form and booking system. It features AI Integration to help the user decide on a cleaning service.",
      Tech: ["React", "Node.js"],
      Link: "https://elijahswilliams.github.io/AWCLEANING/",
      Repo: ["https://github.com/ElijahSWilliams/AWCLEANING"],
    },
  ];

function Projects() {

return (
<div className="projects">
  <h1 className="projects__title">
    Projects
  </h1>

  <div className="projects__grid">
    {[...projects].reverse().map((project, index) => (
      <div
        key={index}
        className="project-card"
      >
        <h2 className="project-card__title">
          {project.Title}
        </h2>

        <p className="project-card__description">
          {project.Description}
        </p>

        <p className="project-card__tech">
          <span className="project-card__label">
            Tech:
          </span>{" "}
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
)}

export default Projects;