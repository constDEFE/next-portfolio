import { BsFillPersonLinesFill, BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Style } from "../models/models";
import React from "react";

const styles: Style = {
  section: "section h-screen text-center",
  container: "container mt-4 flex justify-center items-center",
  topText: "uppercase text-sm tracking-widest dark:text-[#ecf0f3] text-gray-600",
  title: "py-4 dark:text-[#b6d0e4] text-gray-700",
  secTitle: "dark:text-[#ecf0f3] text-[#1f2937] text-4xl sm:text-5xl md:text-6xl",
  paragraph: "py-4 text max-w-[70%] mx-auto",
  sourceContainer: "flex items-center justify-between max-w-[330px] m-auto py-4",
  source: `p-4 dark:shadow-slate-900 source-button`,
};

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <p className={styles.topText}>Let's build something together</p>
          <h1 className={styles.title}>
            Hi, I'm <span>Konstantin</span>
          </h1>
          <h2 className={styles.secTitle}>A Front-End Web Developer</h2>
          <p className={styles.paragraph}>
            I'm a Front-End web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning new technologies.
          </p>
          <div className={styles.sourceContainer}>
            <a
              className={styles.source}
              href="https://t.me/constDEFE"
              target="_blank"
              rel="noreferrer"
            >
              <BsTelegram size={30} />
            </a>
            <a
              className={styles.source}
              href="https://github.com/constDEFE"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a className={styles.source} href="mailto:constant_defe@proton.me">
              <AiOutlineMail size={30} />
            </a>
            <a
              className={styles.source}
              href="https://drive.google.com/file/d/19Gy6VtU9z6rgGKX23PbspCTB9-moSHpt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
