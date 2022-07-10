import React from "react";
import Nav from "../../components/Secondary/Nav";
import About from "../../components/Secondary/About";
import styles from "./Secondary.module.css";
const index = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <About/>
    </div>
  );
};

export default index;
