import { Style } from "../models/models";
import Image from "next/image";
import React from "react";

interface SkillProps {
  image: string;
  title: string;
};

const styles: Style = {
  container: "p-6 rounded-div hover:scale-[1.02] transition-md",
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
