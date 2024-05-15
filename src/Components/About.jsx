import React from "react";
import Navigation from "./Navigation";
import styles from "../Styles/About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <h2>About</h2>
      <p>
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eum
        libero eveniet cumque blanditiis aliquam est debitis? Unde modi fugiat
        rerum itaque dignissimos. Quam magnam ex placeat harum hic quibusdam."
      </p>
      <Navigation />
    </div>
  );
};

export default About;
