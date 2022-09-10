import React from "react";
import styles from "./About.module.css";
const index = () => {
  const one = <p className={styles.myname}>Hi, my name is</p>;
  const two = <h2 className={styles.bigHeading}>Chirag Parmar</h2>;
  const three = <h3 className={styles.smallHeading}>I build things with code.</h3>;
  const four = (
    <>
      <p  className={styles.details}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a
    className={styles.checkOutButton}
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
    >
      Check out my course!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <div className={styles.container}>
      <div className={styles.aboutWrapper}>  {items.map((item, i) => (
        <div key={i}>
          <div>{item}</div>
        </div>
      ))}</div>
    
    </div>
  );
};

export default index;
