import React from "react";
import Navigation from "./Navigation";
import styles from "../Styles/Work.module.css";
import Card from "./Card";

const Work = () => {
  return (
    <div>
      <h2>Projects</h2>
      <section className={styles.container}>
        <Card
          image={"#"}
          name={"E-Commerce for Local Business"}
          content={
            "An online platform for a local spice shop where customers can browse and purchase products remotely."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
        <Card
          image={"#"}
          name={"Inventory Application"}
          content={
            "This project focuses on creating a basic inventory application for a small business, providing users with a platform to track the goods in the inventory."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
        <Card
          image={"#"}
          name={"Profesional Personal Website"}
          content={
            "A professional website to showcase the skills and portfolio of a frontend web developer."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
      </section>
      <Navigation />
    </div>
  );
};

export default Work;
