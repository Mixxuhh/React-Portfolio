import React from "react";
import "./about-me.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="profile-section">
          <div className="profile-image">
            {/* Replace with your actual image */}
            <img src="src\assets\IMG_0559.jpg" alt="profile picture" />
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
            Aspiring full-stack developer with a strong foundation in modern web
            technologies, recently completed an intensive full-stack web
            development bootcamp that began in October 2024. I thrive in
            front-end development where I can blend creativity with
            functionality, and I’m actively growing my backend skills to become
            a more well-rounded developer. I'm passionate about coding and
            continuously learning, I’m excited to break into the tech industry
            and contribute to impactful, user-focused applications.
          </p>
        </div>

        <div className="interests-section">
          <h3>Interests & Hobbies</h3>
          <p>
            When I’m not coding, I like to stay creative and active. I enjoy
            skateboarding and snowboarding, which keep me on my
            toes—literally—and fuels my love for problem-solving in motion. I’m
            also into video games, where I find inspiration in design and
            interactivity. On the hands-on side, I craft custom rugs by hand,
            blending patience and precision in a totally different (but oddly
            similar) kind of project work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
