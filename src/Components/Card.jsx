import React from "react";
import styles from "../Styles/Card.module.css";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({ images, name, content, codeLink, liveLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switchModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cardBody}>
      <img
        src={images[0]}
        alt="projectimages"
        className={styles.cardImg}
        onClick={switchModal}
      />
      <div className={styles.content}>
        <h4 className={styles.cardName}>{name}</h4>
        <p className={styles.cardContent}>{content}</p>
      </div>
      <div className={styles.links}>
        <a href={codeLink} className={styles.codeLink}>
          GitHub
        </a>
        <a href={liveLink} className={styles.liveLink}>
          Live
        </a>
        <button className={styles.modalOpen} onClick={switchModal}>
          Images
        </button>
      </div>
      <div>
        <Modal
          images={images}
          name={name}
          content={content}
          codeLink={"#"}
          liveLink={"#"}
          isOpen={isOpen}
          closeModal={switchModal}
        />
      </div>
    </div>
  );
};

export default Card;
