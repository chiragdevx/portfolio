import React from "react";
import Nav from "../../components/Secondary/Nav";
import About from "../../components/Secondary/About";
import Side from "../../components/Secondary/Side";
import Projects from "../../components/Secondary/Projects";
import styles from "./Secondary.module.css";
const index = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <About />
      <Side />
      <Projects/>
    </div>
  );
};

export default index;
