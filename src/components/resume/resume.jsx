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
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Company Name",
      period: "January 2023 - Present",
      description: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with team members using Git and Agile methodologies",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Previous Company",
      period: "June 2022 - December 2022",
      description: [
        "Assisted in developing front-end features using React and JavaScript",
        "Created and maintained documentation for web applications",
        "Participated in code reviews and team meetings",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2018 - 2022",
      description:
        "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
    },
  ];

  const skills = {
    Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    Backend: ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"],
    "Tools & Others": [
      "Git",
      "VS Code",
      "Agile",
      "Problem Solving",
      "Team Collaboration",
    ],
  };

  return (
    <section className="resume">
      <div className="resume-content">
        <h2>Resume</h2>

        <div className="resume-section">
          <h3>Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4>{exp.title}</h4>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <span className="school">{edu.school}</span>
              <span className="period">{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <ul>
                  {skillList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-actions">
          <a
            href="/path-to-your-resume.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
