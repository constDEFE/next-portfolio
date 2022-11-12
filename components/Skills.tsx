import { Skill as ISkill, Style } from "../models/models";
import React from "react";
import Skill from "./Skill";

const skillArray: ISkill[] = [
  { imageSource: "https://i.ibb.co/w6gVJW9/html.webp", title: "HTML" },
  { imageSource: "https://i.ibb.co/6nNrzfJ/css.webp", title: "CSS" },
  { imageSource: "https://i.ibb.co/tLxWFpq/javascript.webp", title: "JavaScript" },
  { imageSource: "https://i.ibb.co/899pJc7/typescript.webp", title: "TypeScript" },
  { imageSource: "https://i.ibb.co/M7h195L/react.webp", title: "ReactJS" },
  { imageSource: "https://i.ibb.co/f1hJc3Q/redux.webp", title: "Redux Toolkit" },
  { imageSource: "https://i.ibb.co/w4WHh7F/tailwind.webp", title: "Tailwind CSS" },
  { imageSource: "https://i.ibb.co/h2xmzM0/firebase.webp", title: "Firebase" },
];

const styles: Style = {
  section: "section",
  container: "container flex flex-col justify-center",
  sectionTitle: "section-title",
  title: "title",
  skillsContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
};

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>Skills</p>
        <h2 className={styles.title}>What I Can Do</h2>
        {skillArray && (
          <div className={styles.skillsContainer}>
            {skillArray.map((skill) => (
              <Skill
                image={skill.imageSource}
                title={skill.title}
                key={skill.imageSource}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
