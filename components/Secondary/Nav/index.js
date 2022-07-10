import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  const navLinks = [
    {
      name: "About",
      url: "/about/",
    },
    {
      name: "Experience",
      url: "/jobs/",
    },
    {
      name: "Work",
      url: "/projects/",
    },
    {
      name: "Contact",
      url: "/contact/",
    },
  ];
  return (
    <div className={styles.container}>
          <div className={styles.navLinkWrapper}>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <>
                  <span className={styles.count}>0{i + 1}.</span>{" "}
                  <div className={styles.navLink} key={i}>
                    <Link href={url}>{name}</Link>
                  </div>
                </>
              ))}
            <button
              className={styles.resumeButton}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </button>
        
      </div>
    </div>
  );
};

export default Nav;
