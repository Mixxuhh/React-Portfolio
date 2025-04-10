import React from "react";
import "./about-me.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="profile-section">
          <div className="profile-image">
            {/* Replace with your actual image */}
            <img src="/path-to-your-image.jpg" alt="profile picture" />
          </div>
          <div className="profile-info">
            <h1>Wilson Crase</h1>
            <h2>Full Stack Web Developer</h2>
            <p className="tagline">
              Building beautiful and functional web experiences
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3>About Me</h3>
          <p>
            I am a passionate Full Stack Web Developer with a strong foundation
            in both front-end and back-end technologies. My journey in web
            development started in October 2024. I specialize in creating
            responsive, user-friendly applications that solve real-world
            problems.
          </p>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL & NoSQL Databases</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Agile Methodologies</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3>Interests & Hobbies</h3>
          <p>
            When I'm not coding, you can find me snowboarding and skateboarding.
            I believe in continuous learning and staying up-to-date with the
            latest web development trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
