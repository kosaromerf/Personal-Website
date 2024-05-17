import React from "react";
import styles from "../Styles/Card.module.css";
import image1 from "../assets/placeholder/name1.jpg";

const Card = ({ image, name, content, codeLink, liveLink }) => {
  return (
    <div className={styles.cardBody}>
      <img src={image1} alt="projectimages" className={styles.cardImg} />
      <h4 className={styles.cardName}>{name}</h4>
      <p className={styles.cardContent}>{content}</p>
      <a href={codeLink} className={styles.codeLink}>
        github
      </a>
      <a href={liveLink} className={styles.liveLink}>
        preview
      </a>
    </div>
  );
};

export default Card;
