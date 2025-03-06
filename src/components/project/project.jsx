import "./project.css";

// const Project = ({ projectName, backgroundImageUrl }) => (
//   <div
//     className="project"
//     style={
//       backgroundImageUrl
//         ? { backgroundImage: `url(${backgroundImageUrl})` }
//         : {}
//     }
//   >
//     {projectName}
//   </div>
// );

const Project = ({ projectName, backgroundImageUrl }) => {
  return (
    <div
      className="project"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <span className="project-name">{projectName}</span>
    </div>
  );
};

export default Project;
