import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => (
  <nav className="nav">
    <Link to="/about">About Me</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contact Me</Link>
    <Link to="/resume">Resume</Link>
  </nav>
);

export default Navigation;
