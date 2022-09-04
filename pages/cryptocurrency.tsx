import { FaAngleRight } from 'react-icons/fa'
import React, { FC } from 'react'
import Image from 'next/image'

type Styles = { [key:string]: string };

const styles: Styles = {
  section: "w-full",
  imageContainer: "w-screen h-[30vh] lg:h-[40vh] relative",
  image: "absolute z-1",
  imageOverlay: "absolute left-0 top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80",
  textContainer: "absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-1/2 z-10 p-2 text-white",
  container: "max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8",
  overviewContainer: "col-span-4",
  sectionTitle: "section-title",
  title: "py-2",
  paragraph: "whitespace-pre-line py-2 text",
  buttonsContainer: "flex gap-8",
  button: "px-8 py-2 mt-4 border border-[#709dff] dark:border-[#5651e5] rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white select-none hover:scale-105 shadow-md hover:shadow-lg shadow-slate-400 dark:shadow-slate-900 hover:shadow-[#5651e5]/50 ease-in duration-150",
  techsContainer: "col-span-4 md:col-span-1 border border-slate-200 dark:border-[#1c2736] shadow-lg hover:shadow-xl shadow-slate-400 dark:shadow-slate-900 hover:shadow-[#5651e5]/60 rounded-xl p-4 hover:scale-105 duration-150 ease-in",
  techsTitle: "text-center font-bold",
  techContainer: "text-slate-700 dark:text-slate-400 py-2 flex items-center gap-1",
  tech: "hover:scale-105 ease-in duration-100 font-medium cursor-default"
}

const cryptocurrency: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image 
          className={styles.image} 
          src="https://i.ibb.co/SmbtJRY/cryptocurrency-Page.webp" 
          layout='fill' 
          objectFit="cover" 
          alt="/" 
          priority
        />
        <div className={styles.imageOverlay} />
        <div className={styles.textContainer}>
          <h2>Cryptocurrency App</h2>
          <h3>ReactJS | Firebase | CoinGecko API</h3>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.overviewContainer}>
          <p className={styles.sectionTitle}>Project</p>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.paragraph}>
            {"Unfortunately, this project doesn't include Responsive design.\n"}
            {"It was built using ReactJS, Tailwind CSS and Google Firebase.\n"}
          </p>
          <p className={styles.paragraph}>
            {"Project includes:\n"}
            {"\tTop 10 the most popular Cryptocurrencies.\n"}
            {"\tTrending Cryptocurrencies.\n"}
            {"\tDynamic generated page with detailed information for each Cryptocurrency.\n"}
            {"\tAuthorization system. [ Email | Password ]\n"}
            {"\tAccount page.\n"}
            {"\tWatch List for Cryptocurrencies.\n"}
            {"\tDark/Light Theme.\n"}
            {"\tResponsive Design.\n"}
          </p>
          <div className={styles.buttonsContainer}>
            <a href='https://react-cryptocurrency-one.vercel.app/' 
              target="_blank" 
              rel="noreferrer" 
              className={styles.button}
              >
                Demo
              </a>
            <a href='https://github.com/constDEFE/react-cryptocurrency' 
              target='_blank' 
              rel="noreferrer" 
              className={styles.button}
            >
              Code
            </a>
          </div>
        </div>
        <div className={styles.techsContainer}>
          <p className={styles.techsTitle}>Technologies</p>
          <ul>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>HTML</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>CSS</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>Tailwind CSS</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>TypeScript</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>ReactJS</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>Firebase</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>CoinGecko API</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default cryptocurrency