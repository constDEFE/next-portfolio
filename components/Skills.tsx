import { Skill as ISkill, Style } from "../models/models";
import React from "react";
import Skill from "./Skill";
import skills from "../JSON/skills.json";

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
        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <Skill
              image={skill.imageSource}
              title={skill.title}
              key={skill.imageSource}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
