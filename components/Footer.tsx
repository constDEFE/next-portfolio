import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

type Styles = { [key: string]: string };

const styles: Styles = {
  section: "flex flex-col dark:bg-[#1f2937] bg-[#ecf0f3] items-center py-20",
  arrowUp: "p-4 shadow-lg border border-slate-200 dark:border-[#1c2736] animate-bounce dark:shadow-slate-900 shadow-gray-400 hover:shadow-xl rounded-full cursor-pointer hover:shadow-[#5651e5]/75 duration-100 ease-in"
}

const Footer = () => {
  return (
    <footer className={styles.section}>
      <Link href={"/"}>
        <div className={styles.arrowUp}>
          <HiOutlineChevronDoubleUp color="#5651e5" size={35} />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
