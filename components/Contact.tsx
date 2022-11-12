import { BsFillPersonLinesFill, BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Style } from "../models/models";
import React from "react";
import Image from "next/image";

const styles: Style = { 
  section: "section",
  container: "container",
  sectionTitle: "section-title",
  title: "title",
  content: "grid lg:grid-cols-5 gap-8",
  leftSide: "col-span-3 lg:col-span-2 w-full h-full p-4 rounded-div shadow-slate-400 hover:shadow-slate-400 dark:hover:shadow-slate-900 shadow-xl rounded-2xl",
  leftSideColumn: "flex flex-col gap-8 md:gap-0 justify-between lg:p-4 h-full",
  imageContainer: "rounded-xl relative hover:scale-[1.02] transition-md",
  image: "rounded-xl",
  name: "title",
  job: "comment",
  paragraph: "py-4 text",
  sourcesTitle: "uppercase pt-2 tracking-widest dark:text-[#ecf0f3] text-[#1f2937] font-medium",
  sourcesContainer: "flex items-center justify-between py-4",
  source: "p-4 dark:shadow-slate-900 source-button",
  rightSide: "col-span-3 w-full h-auto p-4 rounded-div shadow-slate-400 hover:shadow-slate-400 dark:hover:shadow-slate-900 shadow-xl rounded-2xl",
  rightSideContaier: "p-4",
  comment: "comment",
  inputsContainer: "grid md:grid-cols-2 gap-4 w-full py-2",
  topInputWrapper: "flex flex-col",
  label: "py-2",
  emailInputWrapper: "flex flex-col py-2",
  longInputWrapper: "flex flex-col py-2",
  textArea: "min-h-[120px]",
  button: "w-full p-4 text-gray-100 mt-4 dark:shadow-slate-800 hover:scale-[1.01] hover:shadow-[#5651e5]/20 transition-md",
}

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>
          Contact
        </p>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={styles.leftSideColumn}>
              <div>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src="https://i.ibb.co/1rstw46/contact.webp"
                    width={1024}
                    height={696}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className={styles.name}>Konstantin</h2>
                  <p className={styles.job}>{"// Front-End Developer"}</p>
                  <p className={styles.paragraph}>
                    I'm available for freelance or full-time distant positions. Contact
                    me and let's talk.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className={styles.sourcesTitle}>Connect With Me</p>
                  <div className={styles.sourcesContainer}>
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
                    <a
                      className={styles.source}
                      href="mailto:constant_defe@proton.me"
                    >
                      <AiOutlineMail size={30} />
                    </a>
                    <a
                      className={styles.source}
                      href="https://drive.google.com/file/d/19Gy6VtU9z6rgGKX23PbspCTB9-moSHpt/view?usp=sharing"
                      target='_blank'
                      rel="noreferrer"
                    >
                      <BsFillPersonLinesFill size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.rightSideContainer}>
              <form method="POST" action='https://getform.io/f/8267831a-2ef3-48c0-a8f5-9576cfeba39b' target='_blank'>
                <p className={styles.comment}>{"// Submit this form or shoot me an email"}</p>
                <div className={styles.inputsContainer}>
                  <div className={styles.topInputWrapper}>
                    <label
                      className={styles.label}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className={styles.topInput}
                      type="text"
                      name="name"
                      placeholder="Your name or the Company you represent...  "
                      id="name"
                      required
                    />
                  </div>
                  <div className={styles.topInputWrapper}>
                    <label
                      className={styles.label}
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className={styles.topInput}
                      type="tel"
                      name="phone"
                      placeholder="XXX-XXX-XXXX"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}"
                      id="phone"
                    />
                  </div>
                </div>
                <div className={styles.emailInputWrapper}>
                  <label
                    className={styles.label}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={styles.longInput}
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    id="email"
                  />
                </div>
                <div className={styles.longInputWrapper}>
                  <label
                    className={styles.label}
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className={styles.longInput}
                    type="text"
                    name="subject"
                    placeholder="You decide..."
                    id="subject"
                    required
                  />
                </div>
                <div className={styles.longInputWrapper}>
                  <label
                    className={styles.label}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                    className={styles.textArea}
                    rows={10}
                    required
                  />
                </div>
                <button className={styles.button}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
