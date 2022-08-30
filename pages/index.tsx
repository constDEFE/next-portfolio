import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

type Styles = { [key: string]: string };

const styles: Styles = {
  main: "dark:bg-[#1f2937] bg-[#ecf0f3]",
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KG | Front-End Developer</title>
        <meta name="description" content="Next.js Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
