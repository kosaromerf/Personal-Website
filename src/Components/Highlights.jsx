import React from "react";
import styles from "../Styles/Highlights.module.css";

const Highlights = ({ name, date, description, isProject, urls }) => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{date}</p>
      <div className={styles.detail}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Highlights;
