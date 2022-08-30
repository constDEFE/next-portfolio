import { BsTelegram, BsFillPersonLinesFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { MdWbSunny } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { 
  AiOutlineClose, 
  AiOutlineMenu, 
  AiOutlineMail 
} from "react-icons/ai";
import React, { 
  MouseEvent, 
  useEffect, 
  useState 
} from "react";

type Styles = { [key: string]: string };

const styles: Styles = {
  nav: `fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-t from-[#ecf0f3]/30 to-[#ecf0f3]/75 dark:from-[#1f2937]/30 backdrop-blur-sm dark:to-[#1f2937]/95`,
  navContainer: "navbar flex justify-between items-center w-full h-full px-4 2xl:px-16",
  logo: `cursor-pointer text-[#1f2937] dark:text-[#ecf0f3]`,
  linksContainer: `hidden text-[#1f2937}] dark:text-[#ecf0f3] md:flex items-center gap-8`,
  link: `cursor-pointer hover:scale-105 py-2 px-2 duration-100 ease-in border-b-[#1f2937]`,
  buttonsContainer: "flex items-center justify-center gap-8",
  themeButton: `flex items-center justify-center cursor-pointer rounded-full p-2 dark:bg-slate-800/50 shadow-md hover:shadow-lg dark:shadow-slate-900 shadow-slate-500 hover:shadow-[#5651e5]/50 bg-gray-200 hover:scale-110 ease-in duration-150 text-[#1f2937] dark:text-[#ecf0f3]`,
  mobileButton: "md:hidden cursor-pointer dark:text-[#ecf0f3]",
  mobileHeader: "flex w-full items-center justify-between",
  mobileCloseButton: `flex items-center justify-center cursor-pointer rounded-full p-2 dark:bg-slate-800 shadow-md hover:shadow-lg dark:shadow-slate-900 shadow-slate-500 hover:shadow-[#5651e5]/75 bg-gray-200 hover:scale-110 ease-in duration-150 text-[#1f2937] dark:text-[#ecf0f3]`,
  mobilePhraseContainer: "border-b border-gray-300 my-4",
  mobilePhrase: "w-[85%] md:w-[90%] py-4 dark:text-[#ecf0f3]",
  mobileContent: "py-4 flex flex-col",
  mobileLinksContainer: "uppercase",
  mobileLink: "py-4 cursor-pointer tracking-widest duration-100 ease-in text-[#1f2937] dark:text-[#ecf0f3] hover:translate-x-2",
  breakLine: "bg-gray-400 border-gray-400 w-[30%]",
  mobileBottom: "mt-40",
  mobileSourcesTitle: "uppercase tracking-widest text-[#5651e5]",
  mobileSourcesContainer: "flex items-center justify-between my-4 w-full sm:w-[80%]",
  mobileSource: `cursor-pointer rounded-full p-[10px] dark:bg-slate-800 shadow-md hover:shadow-lg dark:shadow-slate-900 shadow-slate-500 hover:shadow-[#5651e5]/75 bg-gray-200 hover:scale-110 ease-in duration-150 text-[#1f2937] dark:text-[#ecf0f3]`,
  showBG: "mobile-navbar-bg dark:text-[#ecf0f3] fixed md:hidden left-0 top-0 w-full h-screen bg-black/70 duration-200",
  hideBG: "",
  showMenu: `mobile-navbar fixed left-[0] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen dark:bg-[#1f2937] bg-[#ecf0f3] py-5 px-4 duration-[250ms]`,
  hideMenu: "mobile-navbar fixed left-[-100%] bg-[#ecf0f3] py-5 px-4 top-0 duration-[250ms]",
};

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleMenu = (): void => setMenu(!menu);
  const handleCloseMenu = (event: MouseEvent): void => event.stopPropagation();
  const handleToggleTheme = (): void => toggleTheme(theme);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href={"/"}>
          <h2 className={styles.logo}>K|G</h2>
        </Link>
        <ul className={styles.linksContainer}>
          <Link href={"/"}>
            <li className={styles.link}>Home</li>
          </Link>
          <Link href={"/#about"}>
            <li className={styles.link}>About</li>
          </Link>
          <Link href={"/#skills"}>
            <li className={styles.link}>Skills</li>
          </Link>
          <Link href={"/#projects"}>
            <li className={styles.link}>Projects</li>
          </Link>
          <Link href={"/#contact"}>
            <li className={styles.link}>Contact</li>
          </Link>
        </ul>
        <div className={styles.buttonsContainer}>
          {mounted && (
            <div onClick={handleToggleTheme} className={styles.themeButton}>
              {theme === "light" ? (
                <MdWbSunny size={27} />
              ) : (
                <RiMoonClearFill size={27} />
              )}
            </div>
          )}
          <div onClick={handleMenu} className={styles.mobileButton}>
            <AiOutlineMenu size={32} />
          </div>
        </div>
      </div>

      <div
        className={menu ? styles.showBG : styles.hideBG}
        onClick={handleMenu}
      >
        <div
          className={menu ? styles.showMenu : styles.hideMenu}
          onClick={handleCloseMenu}
        >
          <div className={styles.mobileHeader}>
            <h2 className={styles.logo}>K|G</h2>
            <div onClick={handleMenu} className={styles.mobileCloseButton}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className={styles.mobilePhraseContainer}>
            <p className={styles.mobilePhrase}>
              Let's build something legendary together
            </p>
          </div>
          <div className={styles.mobileContent}>
            <ul className={styles.mobileLinksContainer}>
              <Link href={"/"}>
                <li onClick={handleMenu} className={styles.mobileLink}>
                  Home
                </li>
              </Link>
              <hr className={styles.breakLine} />
              <Link href={"/#about"}>
                <li onClick={handleMenu} className={styles.mobileLink}>
                  About
                </li>
              </Link>
              <hr className={styles.breakLine} />
              <Link href={"/#skills"}>
                <li onClick={handleMenu} className={styles.mobileLink}>
                  Skills
                </li>
              </Link>
              <hr className={styles.breakLine} />
              <Link href={"/#projects"}>
                <li onClick={handleMenu} className={styles.mobileLink}>
                  Projects
                </li>
              </Link>
              <hr className={styles.breakLine} />
              <Link href={"/#contact"}>
                <li onClick={handleMenu} className={styles.mobileLink}>
                  Contact
                </li>
              </Link>
            </ul>
            <div className={styles.mobileBottom}>
              <p className={styles.mobileSourcesTitle}>Let's Connect</p>
              <div className={styles.mobileSourcesContainer}>
                <a
                  className={styles.mobileSource}
                  href="https://t.me/constDEFE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTelegram size={30} />
                </a>
                <a
                  className={styles.mobileSource}
                  href="https://github.com/constDEFE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  className={styles.mobileSource}
                  href="mailto:constant_defe@proton.me"
                >
                  <AiOutlineMail size={30} />
                </a>
                <a
                  onClick={handleMenu}
                  className={styles.mobileSource}
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
    </nav>
  );
};

export default Navbar;
