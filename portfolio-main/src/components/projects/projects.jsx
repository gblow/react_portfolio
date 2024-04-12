import React from "react";
import styles from "./projects.module.css";
import { projects } from "../../data/projectsData.js";
import {ProjectCard} from "./projectcard.jsx";


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};