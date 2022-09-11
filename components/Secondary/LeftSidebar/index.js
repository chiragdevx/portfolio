import React from "react";
import GithubIcon from "../../icons/GithubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import styles from "./Side.module.css";
const index = () => {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.iconWrapper}>
        <LinkedInIcon />
      </div>
      <div className={styles.iconWrapper}>
        <GithubIcon />
      </div>
     
      <div className={styles.iconWrapper}>
        <TwitterIcon />
      </div>

      <div className={styles.spine}></div>

    </div>
  );
};

export default index;
