import React, { useState } from "react";
import { ProjectType } from "./Projects";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

type ProjectSliderProps = { projects: Array<ProjectType> };

const styles = {
  container: "h-[300px] lg:h-[600px] p-3 shadow-xl dark:shadow-slate-900 shadow-slate-500 rounded-3xl hover:scale-[1.01] duration-200 ease-in",
  content: "h-full relative group",
  image: "rounded-3xl select-none",
  panel: "absolute scale-[1.001] bg-gradient-to-t w-full flex flex-col items-center justify-end pb-[90px] sm:pb-[80px] lg:pb-[150px] h-full rounded-3xl from-black to-transparent top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
  panelTitle: "text-xl sm:text-2xl py-2 sm:py-0 text-white tracking-wider text-center",
  panelMainTechs: "hidden sm:block pb-4 pt-2 text-white text-center",
  panelButton: "text-center duration-150 ease-in py-1 px-2 sm:py-2 sm:px-8 rounded-lg hover:bg-[#5651e5] hover:text-white bg-white text-gray-700 font-bold text-lg cursor-pointer",
  leftArrow: "group-hover:opacity-100 opacity-0 rounded-full p-1 shadow-slate-600 bg-white hover:scale-110 duration-200 hover:shadow-[#5651e5]/50 hover:shadow-lg shadow-md top-2/3 -translate-y-2/3 absolute cursor-pointer left-8",
  rightArrow: "group-hover:opacity-100 opacity-0 rounded-full p-1 shadow-slate-600 bg-white hover:scale-110 duration-200 hover:shadow-[#5651e5]/50 hover:shadow-lg shadow-md top-2/3 -translate-y-2/3 absolute cursor-pointer right-8",
  arrow: "accent",
  slide: "w-full h-full absolute ease-in-out duration-[400ms] opacity-0",
  activeSlide: "w-full h-full absolute ease-in-out duration-[400ms] opacity-1",
  dot: "w-5 h-5 rounded-full border-2 border-gray-600 my-1 bg-gray-600 cursor-pointer",
  dotsContainer: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1",
  activeDot: "w-5 h-5 rounded-full border-2 border-gray-600 my-1 bg-gray-900",
};

const ProjectSlider = ({ projects }: ProjectSliderProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = (): void => {
    if (slideIndex !== projects.length - 1) setSlideIndex(slideIndex + 1);
    else setSlideIndex(0);
  };

  const prevSlide = (): void => {
    if (slideIndex !== 0) setSlideIndex(slideIndex - 1);
    else setSlideIndex(projects.length - 1);
  };

  const dotHandler = (index: number): void => setSlideIndex(index);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {projects.map((project, index) => (
          <div
            className={slideIndex === index ? styles.activeSlide : styles.slide}
            key={index}
          >
            <Image
              src={project.imageSource}
              className={styles.image}
              layout='fill'
              objectFit="cover"
              draggable="false"
              alt="/"
            />
          </div>
        ))}
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>
            {projects[slideIndex]?.title}
          </h3>
          <p className={styles.panelMainTechs}>
            {projects[slideIndex]?.mainStack.join(" | ")}
          </p>
          <Link href={`/${projects[slideIndex]?.url}`}>
            <p className={styles.panelButton}>
              More Info
            </p>
          </Link>
        </div>
        <div className={styles.leftArrow}>
          <HiOutlineArrowNarrowLeft
            onClick={prevSlide}
            className={styles.arrow}
            size={30}
          />
        </div>
        <div className={styles.rightArrow}>
          <HiOutlineArrowNarrowRight
            onClick={nextSlide}
            className={styles.arrow}
            size={30}
          />
        </div>
        <div className={styles.dotsContainer}>
          {projects.map((dot, index) => (
            <div
              onClick={() => dotHandler(index)}
              key={index}
              className={index === slideIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
