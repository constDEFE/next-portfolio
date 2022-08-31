import Image from "next/image";
import React from "react";

type Styles = { [key: string]: string };
type SkillProps = {
  image: string;
  title: string;
};

const styles: Styles = {
  container: "p-6 dark:shadow-slate-900 shadow-lg shadow-slate-400/60 rounded-xl hover:shadow-[#5651e5]/40 hover:shadow-xl hover:scale-105 ease-in duration-200",
  content: "grid grid-cols-2 gap-4 justify-center items-center",
  imageContainer: "relative m-auto flex",
  titleContainer: "flex flex-col items-center justify-center",
  title: "text-[#1f2937] dark:text-[#ecf0f3]",
};

const Skill = ({ image, title }: SkillProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            draggable="false"
            src={image}
            width="64px"
            height="64px"
            alt="/"
          />
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
