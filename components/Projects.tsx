import ProjectSlider from "./ProjectSlider";
import React from "react";

type Styles = { [key: string]: string };

export type ProjectType = {
  imageSource: string;
  title: string;
  url: string;
  mainStack: Array<string>;
};

const projects: Array<ProjectType> = [
  {
    imageSource: "https://i.ibb.co/3cCNsHZ/weather-application-Page.webp",
    title: "Weather Application",
    url: "weather-application",
    mainStack: ["ReactJS", "Rapid API"],
  },
  {
    imageSource: "https://i.ibb.co/kctwkqr/BestEats.webp",
    title: "BestEats",
    url: "besteats",
    mainStack: ["HTML", "Tailwind CSS"],
  },
  {
    imageSource: "https://i.ibb.co/m8bSyN1/Messenger.webp",
    title: "Messenger",
    url: "messenger-application",
    mainStack: ["ReactJS", "Tailwind CSS", "Firebase"],
  },
];

const styles: Styles = {
  section: "w-full lg:h-screen p-4 py-16",
  container: "max-w-[1240px] h-full mx-auto px-2 flex justify-center items-center",
  textContainer: "w-full h-full",
  sectionTitle: "text-xl tracking-widest uppercase text-[#5651e5]",
  title: "py-2 text-[#1f2937] dark:text-[#ecf0f3]",
  comment: "dark:text-[#b6d0e4] py-2 text-[#1f2937]",
};

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.sectionTitle}>Projects</p>
          <h2 className={styles.title}>My Recent Projects</h2>
          <p className={styles.comment}>
            // By the way, this site was built with Next.js and TypeScript.
          </p>
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
