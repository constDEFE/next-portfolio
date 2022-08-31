import type { NextPage } from "next";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import About from "../components/About";
import Hero from "../components/Hero";
import Head from "next/head";

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
