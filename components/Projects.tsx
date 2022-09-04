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
    imageSource: "https://i.ibb.co/Bnfjc6S/cryptocurrency.webp",
    title: "Cryptocurrency App",
    url: "cryptocurrency",
    mainStack: ["ReactJS", "Firebase", "CoinGecko API"]
  },
  {
    imageSource: "https://i.ibb.co/3cCNsHZ/weather-application-Page.webp",
    title: "Weather App",
    url: "weather",
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
    url: "messenger",
    mainStack: ["ReactJS", "Tailwind CSS", "Firebase"],
  },
];

const styles: Styles = {
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
          <p className={styles.comment}>{"// By the way, this site was built with Next.js."}</p>
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
