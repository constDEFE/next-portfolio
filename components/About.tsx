import Image from "next/image";
import React from "react";

type Styles = { [key: string]: string };

const styles: Styles = {
  section: "section flex items-center",
  container: "container md:grid grid-cols-3 gap-8",
  textContainer: "col-span-2 w-full h-full",
  sectionTitle: "section-title",
  title: "title",
  comment: "py-2 comment",
  paragraph: "py-2 text",
  link: "underline py-2 text-gray-600 dark:text-[#ecf0f3] cursor-pointer",
  imageContainer: "w-full relative border border-slate-200 dark:border-[#1c2736] h-auto mt-4 m-auto shadow-lg hover:shadow-xl dark:shadow-slate-900 shadow-slate-500 rounded-xl hover:shadow-[#5651e5]/60 md:flex items-center justify-center p-4 hover:scale-[1.02] ease-in duration-150",
  image: "rounded-xl",
};

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.sectionTitle}>About</p>
          <h2 className={styles.title}>Who I Am</h2>
          <p className={styles.comment}>{"// I am not your normal developer"}</p>
          <p className={styles.paragraph}>
            Hi again. My full name is Konstantin Glazov and I am a 16 years old
            self-taught programmer from Russia. I've always had a knack for
            technology and working with computers. My first encounter with
            programming was HTML and CSS. I was trying to make my own first
            website and... it was quite a bitter experience. It was ugly, has no
            semantic tags at all and was barely styled but.. it was my Own
            website.
          </p>
          <p className={styles.paragraph}>
            Then my second encounter was with Java. After watching alot of
            videos and reading bunch of posts, I decided to learn something
            "more powerful" than "simple" html and css. I tried to learn Java. I
            can't say it was a bad experience. Yeah, I haven't made a single
            application that I could say I'm proud of. But I've learned alot.
            From different variable types, to objects. From static methods to
            OOP concepts such as Abstraction, Polymorphism, Encapsulation and
            Inheritance. But after all I decided to go into a Web development.
          </p>
          <p className={styles.paragraph}>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. From HTML and CSS to Java and its OOP and now I spend
            my time building web applications with React JS, TypeScript,
            Firebase and learning new technologies such as Next.js.
          </p>
          <a href="#projects" className={styles.link}>
            Check out some of my latest projects.
          </a>
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable="false"
            className={styles.image}
            src="https://i.ibb.co/xFnFL1v/about.webp"
            width={800}
            height={1300}
            priority
            alt="/"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
