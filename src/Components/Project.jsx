import React from "react";
import ProjectCard from "./Cards/ProjectCard";
import Heading from "./Heading";
import { projectData } from "../projectData";

const Project = () => {
  return (
    <div className="project-cn" id="Project">
      <Heading
        heading="Projects"
        comment="// Crafting Code, Shaping Experiences"
      />
      <section className="project-card-cn">
        {projectData.map((data) => {
          const { id, imageLink, name, gitLink, deployLink,projectAbout } = data;
          return (
            <ProjectCard
              key={id}
              imageLink={imageLink}
              name={name}
              gitLink={gitLink}
              deployLink={deployLink}
              projectAbout = {projectAbout}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Project;
