import React from "react";
import "./project.css";

// const Project = ({ projectName, backgroundImageUrl }) => (
//   <div
//     className="project"
//     style={
//       backgroundImageUrl
//         ? { backgroundImage: `url(${backgroundImageUrl})` }
//         : {}
//     }
//   >
//     {projectName}
//   </div>
// );

const Project = ({
  projectName,
  backgroundImageUrl,
  description = "A brief description of the project and its key features.",
  technologies = ["React", "Node.js", "Express", "MongoDB"],
  githubUrl = "#",
  deployedUrl = "#",
}) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
