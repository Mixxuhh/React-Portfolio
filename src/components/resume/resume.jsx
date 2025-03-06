import React from "react";
import "./resume.css";

// Resume Component
// const Resume = () => (
//   <section className="resume-section">
//     <h2>Resume</h2>
//     <ul>
//       <li>Proficiency 1</li>
//       <li>Proficiency 2</li>
//       <li>Proficiency 3</li>
//     </ul>
//     <a href="/resume.pdf" download>
//       Download My Resume
//     </a>
//   </section>
// );

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>John Doe</h1>
        <p>
          <strong>Front-End Developer</strong>
        </p>
      </header>

      <section className="contact-info">
        <p>
          <a href="mailto:johndoe@example.com">johndoe@example.com</a> | (123)
          456-7890 |{" "}
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          Detail-oriented front-end developer with 3+ years of experience
          designing and building responsive web applications using HTML, CSS,
          JavaScript, TypeScript, and React. Passionate about creating seamless
          user experiences and staying up-to-date with modern web development
          practices.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> HTML, CSS, JavaScript (ES6+), TypeScript
          </li>
          <li>
            <strong>Libraries & Frameworks:</strong> React, Redux, Tailwind CSS,
            Bootstrap
          </li>
          <li>
            <strong>Tools:</strong> Git, Webpack, Vite, Figma, Jest, ESLint
          </li>
          <li>
            <strong>Other:</strong> Responsive Design, Agile Methodologies, REST
            APIs
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div>
          <p className="job-title">Front-End Developer</p>
          <p className="company-name">
            Tech Solutions Inc. — January 2022 - Present
          </p>
          <ul>
            <li>
              Designed and implemented responsive web applications using React,
              ensuring cross-browser compatibility and accessibility.
            </li>
            <li>
              Migrated legacy codebases from JavaScript to TypeScript, improving
              maintainability and type safety.
            </li>
            <li>
              Collaborated with designers and back-end developers to deliver
              seamless user experiences.
            </li>
            <li>
              Optimized application performance, reducing load times by 20%
              using code-splitting and lazy loading.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
