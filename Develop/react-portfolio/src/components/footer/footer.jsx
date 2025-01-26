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

const Footer = () => (
  <footer className="footer">
    <p>
      <a
        className="social-icon github"
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="social-icon linked-in"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="social-icon stack-overflow"
        href="https://stackoverflow.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stack Overflow
      </a>
    </p>
  </footer>
);

export default Footer;
