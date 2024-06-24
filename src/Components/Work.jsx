import React from "react";
import styles from "../Styles/Work.module.css";
import Card from "./Card";
import image1 from "../assets/PersonalWebsite/image1.png";
import image2 from "../assets/PersonalWebsite/image2.png";
import image3 from "../assets/PersonalWebsite/image3.png";
import image4 from "../assets/PersonalWebsite/image4.png";
import image5 from "../assets/PersonalWebsite/image5.png";

const Work = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className={styles.main} id="workPage">
      <h2 className={styles.projects}>Projects</h2>
      <section className={styles.container}>
        <Card
          images={images}
          name={"Profesional Personal Website"}
          content={
            "A professional website to showcase the skills and portfolio of a frontend web developer."
          }
          codeLink={"https://github.com/kosaromerf/Portfolio"}
          liveLink={"https://portfolio-kosaromerfs-projects.vercel.app/"}
        />
      </section>
    </div>
  );
};

export default Work;
