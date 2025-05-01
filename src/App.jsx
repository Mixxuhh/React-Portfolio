import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import { Portfolio } from "./components/project/project";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import AboutMe from "./components/about-me/about-me";
import Resume from "./components/resume/resume";

// Header Component
<Header></Header>;
// Footer Component

<AboutMe></AboutMe>;

<Portfolio></Portfolio>;

<Resume></Resume>;

// Contact Component
<Contact></Contact>;

<Footer></Footer>;
// App Component
const App = () => (
  <Router>
    <div className="app-container">
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
    </div>
  </Router>
);

export default App;
