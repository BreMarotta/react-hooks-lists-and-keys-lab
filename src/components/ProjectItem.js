import React from "react";

function ProjectItem({ name, about, technologies }) {
  const spanTech = technologies.map((item) => {
    return <span key={item.id}>{item}</span>
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spanTech}
      </div>
    </div>
  );
}

export default ProjectItem;
