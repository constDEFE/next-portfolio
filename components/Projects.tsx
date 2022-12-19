import { Project, Style } from "../models/models";
import ProjectSlider from "./ProjectSlider";
import React from "react";
import projects from "../JSON/projects.json";

const styles: Style = {
  section: "section",
  container: "container flex justify-center items-center",
  textContainer: "w-full h-full",
  sectionTitle: "section-title",
  title: "title",
  comment: "py-2 comment",
};

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.sectionTitle}>Projects</p>
          <h2 className={styles.title}>My Recent Projects</h2>
          <p className={styles.comment}>
            {"// By the way, this site was built using Next.js."}
          </p>
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
