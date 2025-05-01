import React from "react";
import "./project.css";

// Project data array
const projectData = [
  {
    id: 1,
    projectName: "Cash is King CRM",
    backgroundImageUrl: "https://i.imgur.com/cYW2rpD.jpeg",
    description:
      "Cash is King is a MERN stack CRM app where customers submit ATM service requests, and authenticated admins manage and update those requests through a secure dashboard.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "https://github.com/clintsrc/cash-is-king-crm",
    deployedUrl: "https://cash-is-king-crm.onrender.com",
  },
  {
    id: 2,
    projectName: "GitHub API",
    backgroundImageUrl: "https://octodex.github.com/images/orderedlistocat.png",
    description:
      "A React application that integrates with the GitHub API to search for users and view their profiles.",
    technologies: ["React", "TypeScript", "Vite", "GitHub REST API"],
    githubUrl: "https://github.com/Mixxuhh/GitHub-API",
    deployedUrl: "https://github-api-1.onrender.com",
  },
  {
    id: 3,
    projectName: "Google Book Search",
    backgroundImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2eZ_TFBLUirbI1Lw6RO9cZ_2McVcVucAUQ&s",
    description:
      "A Google Book Search app that lets users search for books using the Google Books API, view details, and save favorites. Users can create an account to manage their saved books and access them anytime.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "https://github.com/Mixxuhh/MERN-Auth-Challenge",
    deployedUrl: "https://mern-auth-challenge.onrender.com",
  },
  {
    id: 4,
    projectName: "Mixxuhhs Calculator",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A fully functional calculator application with advanced mathematical operations, history tracking, and a clean, intuitive interface.",
    technologies: ["React", "TypeScript", "CSS", "Math.js Library"],
    githubUrl: "https://github.com/Mixxuhh/Mixxuhhs-Calculator",
    deployedUrl: "https://mixxuhhs-calculator.onrender.com",
  },
  {
    id: 5,
    projectName: "Mixxuhhs Jigsaw Puzzle",
    backgroundImageUrl:
      "https://img.freepik.com/premium-photo/colorful-pastel-puzzle-background-created-using-generative-ai-tools_543222-2942.jpg",
    description:
      "An interactive puzzle game where players can solve jigsaw puzzles with customizable difficulty levels and image options.",
    technologies: ["React", "Drag n Drop", "TypeScript", "CSS", "Node.js"],
    githubUrl: "https://github.com/Mixxuhh/Mixxuhhs-Jigsaw-Puzzle",
    deployedUrl: "https://mixxuhhs-jigsaw-puzzle.onrender.com",
  },
];

// Project Card Component
const ProjectCard = ({
  projectName,
  backgroundImageUrl,
  description,
  technologies,
  githubUrl,
  deployedUrl,
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

// Portfolio Component
const Portfolio = () => (
  <section className="portfolio-section">
    <h2 className="portfolio-header">Projects</h2>
    <div className="portfolio-grid">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          projectName={project.projectName}
          backgroundImageUrl={project.backgroundImageUrl}
          description={project.description}
          technologies={project.technologies}
          githubUrl={project.githubUrl}
          deployedUrl={project.deployedUrl}
        />
      ))}
    </div>
  </section>
);

export { ProjectCard, Portfolio };
