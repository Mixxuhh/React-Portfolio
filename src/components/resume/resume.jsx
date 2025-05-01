import React from "react";
import "./resume.css";

const Resume = () => {
  const experiences = [
    {
      title: "Busser - Server",
      company: "Solitude Mountian Resort",
      period: "December 2024 - April 2025",
      description: [
        "Accurately record food and drink orders, relay them promptly to the kitchen and bar, and ensure timely delivery to guests.",
        "Clean and sanitize tables, chairs, and dining areas, ensuring a comfortable and hygienic environment for guests.",
        "Greet guests warmly, assist with seating arrangements, and offer recommendations when appropriate.",
      ],
    },
    {
      title: "ATM Technician/ Service Representative",
      company: "Cash is King",
      period: "May 2022 - Present",
      description: [
        "Diagnose and repair ATM machines",
        "Collaborate with team members to ensure efficient operations",
        "Troubleshoot and resolve technical issues",
        "Handle sensitive and confidential information with discretion",
      ],
    },
  ];

  const education = [
    {
      degree: "Associate of Business ",
      school: "Salt Lake Community College",
      period: "2020 - 2022",
      description:
        "Relevant coursework: Business Management, Accounting, Marketing, and more",
    },
    {
      degree: "Full Stack Web Development",
      school: "University of Utah",
      period: "10/2024 - 04/2025",
      description:
        "Relevant coursework: HTML, CSS, JavaScript, TypeScript, React, Node.js, and more",
    },
  ];

  const skills = {
    Frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS3",
      "Responsive Design",
    ],
    Backend: ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"],
    "Tools & Others": [
      "Git",
      "VS Code",
      "GitHub",
      "Problem Solving",
      "Team Collaboration",
    ],
    "Personal Skills": [
      "Adaptability",
      "Communication",
      "Time Management",
      "Problem Solving",
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
      </div>
    </section>
  );
};

export default Resume;
