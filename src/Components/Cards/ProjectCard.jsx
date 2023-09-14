import React, { useState } from "react";

const ProjectCard = ({ imageLink, name, gitLink, deployLink,projectAbout }) => {
  return (
    <div className="project-card">
      <div className="img-cn">
        <img src={imageLink}></img>
      </div>
      <h3>{name}</h3>
      <p>
       {projectAbout|| "comming soon"}
      </p>
      <div className="link-on-project">
        <a href={gitLink} target="_blank">
          Read Me
        </a>
        <a href={deployLink} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
