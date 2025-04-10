import React from "react";
import "./footer.css";

// const Footer = () => (
//   <footer>
//     <p>
//       <a className="github" href="https://github.com">
//         GitHub
//       </a>{" "}
//       |{" "}
//       <a className="linked-in" href="https://linkedin.com">
//         LinkedIn
//       </a>{" "}
//       |{" "}
//       <a className="stack-overflow" href="https://stackoverflow.com">
//         Stack Overflow
//       </a>
//     </p>
//   </footer>
// );

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-info">
          <p>© {currentYear} Wilson Crase. All rights reserved.</p>
          <p className="footer-tagline">
            Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
