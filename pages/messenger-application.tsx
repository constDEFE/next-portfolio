import Image from 'next/image'
import React, { FC } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import MessengerIMG from '../public/assets/projects/MessengerPage.png'

type Styles = { [key:string]: string };

const styles: Styles = {
  section: "w-full",
  imageContainer: "w-screen h-[30vh] lg:h-[40vh] relative",
  image: "absolute z-1",
  imageOverlay: "absolute left-0 top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80",
  textContainer: "absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-1/2 z-10 p-2 text-white",
  container: "max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8",
  overviewContainer: "col-span-4",
  sectionTitle: "uppercase text-xl tracking-widest text-[#5651e5]",
  title: "py-2",
  paragraph: "whitespace-pre-line",
  buttonsContainer: "flex gap-8",
  button: "px-8 py-2 mt-4 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white select-none hover:scale-105 shadow-md hover:shadow-lg shadow-slate-400 dark:shadow-slate-900 hover:shadow-[#5651e5]/50 ease-in duration-150",
  techsContainer: "col-span-4 md:col-span-1 shadow-lg hover:shadow-xl shadow-slate-400 dark:shadow-slate-900 hover:shadow-[#5651e5]/60 rounded-xl p-4 hover:scale-105 duration-150 ease-in",
  techsTitle: "text-center font-bold",
  techContainer: "text-slate-700 dark:text-slate-400 py-2 flex items-center gap-1",
  tech: "hover:scale-105 ease-in duration-100 font-medium cursor-default"
}

const messenger: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image 
          className={styles.image} 
          src={MessengerIMG} 
          layout='fill' 
          objectFit="cover" 
          alt="/" 
        />
        <div className={styles.imageOverlay} />

        <div className={styles.textContainer}>
          <h2>Messenger</h2>
          <h3>ReactJS | Tailwind CSS | Firebase</h3>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.overviewContainer}>
          <p className={styles.sectionTitle}>Project</p>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.paragraph}>
            {"Unfortunately, this project doesn't include Responsive design.\n"}
            {"It was built using ReactJS, Tailwind CSS and Google Firebase.\n"}
            {"Project includes:\n"}
            {"\tRegistration Page. [ Email | Login | Password ]\n"}
            {"\tLogin Page. [ Email | Password ]\n"}
            {"\tProfile Page.\n"}
            {"\tChat Page. [ Only friendlist users are shown ]\n"}
            {"\tAbility to change their profile image.\n"}
            {"\tAbility to send images in chat.\n"}
            {"\tAbility search other users. [ Login ]\n"}
            {"\tAbility to send images in chat.\n"}
            {"\tAbility to send, accept and decline friend requests.\n"}
          </p>
          <div className={styles.buttonsContainer}>
            <a href='https://react-chat-app-beta-kohl.vercel.app/' 
              target="_blank" 
              rel="noreferrer" 
              className={styles.button}
              >
                Demo
              </a>
            <a href='https://github.com/constDEFE/react-chat-app' 
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
              <FaAngleRight /> <p className={styles.tech}>JavaScript</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>ReactJS</p>
            </li>
            <li className={styles.techContainer}>
              <FaAngleRight /> <p className={styles.tech}>Firebase</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default messenger