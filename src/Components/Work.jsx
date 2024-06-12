import React from "react";
import styles from "../Styles/Work.module.css";
import Card from "./Card";
import image1 from "../assets/placeholder/image1.png";
import image2 from "../assets/placeholder/image2.png";
import image3 from "../assets/placeholder/image3.png";
import image4 from "../assets/placeholder/image4.png";
import image5 from "../assets/placeholder/image5.png";

const Work = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className={styles.main} id="workPage">
      <h2 className={styles.projects}>Projects</h2>
      <section className={styles.container}>
        <Card
          images={images}
          name={"E-Commerce for Local Business"}
          content={
            "An online platform for a local spice shop where customers can browse and purchase products remotely."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
        <Card
          images={images}
          name={"Inventory Application"}
          content={
            "This project focuses on creating a basic inventory application for a small business, providing users with a platform to track the goods in the inventory."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
        <Card
          images={images}
          name={"Profesional Personal Website"}
          content={
            "A professional website to showcase the skills and portfolio of a frontend web developer."
          }
          codeLink={"#"}
          liveLink={"#"}
        />
      </section>
    </div>
  );
};

export default Work;
