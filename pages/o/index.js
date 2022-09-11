import React from "react";
import Nav from "../../components/Secondary/Nav";
import About from "../../components/Secondary/About";
import Experience from "../../components/Secondary/Experience";
import Side from "../../components/Secondary/LeftSidebar";
import Projects from "../../components/Secondary/Projects";
import styles from "./Secondary.module.css";
import SidebarLayout from "../../layout/SidebarLayout";
const index = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <SidebarLayout>
         <About />
        <Experience/>
      </SidebarLayout>
     
      <Projects/>
    </div>
  );
};

export default index;
