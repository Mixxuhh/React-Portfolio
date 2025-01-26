import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import AboutMe from "./components/about-me/about-me";
import Resume from "./components/resume/resume";

// Header Component
<Header></Header>;
// Footer Component
<Footer></Footer>;

<AboutMe></AboutMe>;

// Portfolio Component
const Portfolio = () => (
  <section className="portfolio-section">
    <h2 className="portfolio-header">Portfolio</h2>
    <div className="portfolio-grid">
      <Project
        projectName="Surf Report"
        backgroundImageUrl="https://www.snexplores.org/wp-content/uploads/2020/03/1030_oceanwaves.png"
      ></Project>
      <Project
        projectName="LED Wall"
        backgroundImageUrl="https://www.shutterstock.com/shutterstock/videos/1026473249/thumb/1.jpg?ip=x480"
      ></Project>
      <Project
        projectName="Run Buddy"
        backgroundImageUrl="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c4/ed/c6/c4edc63f-c3e0-de6f-d010-a137a3fa03f0/AppIcons-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
      ></Project>
      <Project
        projectName="Calculator"
        backgroundImageUrl={
          "https://c8.alamy.com/comp/P630N4/pen-with-calculator-on-a-notebook-and-keyboard-close-up-P630N4.jpg"
        }
      ></Project>
      <Project
        projectName="Puzzle"
        backgroundImageUrl={
          "https://img.freepik.com/premium-photo/colorful-pastel-puzzle-background-created-using-generative-ai-tools_543222-2942.jpg"
        }
      ></Project>
    </div>
  </section>
);
// Contact Component
<Contact></Contact>;

<Resume></Resume>;

// App Component
const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
