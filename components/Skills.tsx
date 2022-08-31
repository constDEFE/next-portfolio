import React from "react";
import Skill from "./Skill";

type Styles = { [key: string]: string };
type SkillType = {
  imageSource: string;
  title: string;
};

const skillArray: Array<SkillType> = [
  { imageSource: "https://i.ibb.co/w6gVJW9/html.webp", title: "HTML" },
  { imageSource: "https://i.ibb.co/6nNrzfJ/css.webp", title: "CSS" },
  { imageSource: "https://i.ibb.co/tLxWFpq/javascript.webp", title: "JavaScript" },
  { imageSource: "https://i.ibb.co/899pJc7/typescript.webp", title: "TypeScript" },
  { imageSource: "https://i.ibb.co/M7h195L/react.webp", title: "ReactJS" },
  { imageSource: "https://i.ibb.co/w4WHh7F/tailwind.webp", title: "Tailwind CSS" },
  { imageSource: "https://i.ibb.co/kGPzwWf/github.webp", title: "GitHub" },
  { imageSource: "https://i.ibb.co/h2xmzM0/firebase.webp", title: "Firebase" },
];

const styles: Styles = {
  section: "w-full lg:h-screen p-4",
  container: "max-w-[1240px] mx-auto flex flex-col justify-center h-full",
  sectionTitle: "uppercase text-xl tracking-widest text-[#5651e5]",
  title: "py-4 text-[#1f2937] dark:text-[#ecf0f3]",
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
