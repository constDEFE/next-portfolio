import React from "react";
import Skill from "./Skill";

type Styles = { [key: string]: string };
type SkillType = {
  imageSource: string;
  title: string;
};

const skillArray: Array<SkillType> = [
  { imageSource: "/../public/assets/skills/html.png", title: "HTML" },
  { imageSource: "/../public/assets/skills/css.png", title: "CSS" },
  { imageSource: "/../public/assets/skills/javascript.png", title: "JavaScript" },
  { imageSource: "/../public/assets/skills/typescript.png", title: "TypeScript" },
  { imageSource: "/../public/assets/skills/react.png", title: "ReactJS" },
  { imageSource: "/../public/assets/skills/tailwind.png", title: "Tailwind CSS" },
  { imageSource: "/../public/assets/skills/github.png", title: "GitHub" },
  { imageSource: "/../public/assets/skills/firebase.png", title: "Firebase" },
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
