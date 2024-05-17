import React from "react";
import Navigation from "./Navigation";
import ListItem from "./ListItem";
import styles from "../Styles/Skills.module.css";
import HTML5 from "../assets/icons/HTML5.png";
import CSS3 from "../assets/icons/CSS3.png";
import JavaScript from "../assets/icons/JavaScript.png";
import TypeScript from "../assets/icons/TypeScript.png";
import ReactJS from "../assets/icons/React.png";
import NodeJs from "../assets/icons/NodeJs.png";
import MongoDB from "../assets/icons/MongoDB.png";
import PostgreSQL from "../assets/icons/PostgreSQL.png";
import Bootstrap from "../assets/icons/Bootstrap.png";
import Sass from "../assets/icons/Sass.png";
import jQuery from "../assets/icons/jQuery.png";
import Git from "../assets/icons/Git.png";
import GitHub from "../assets/icons/GitHub.png";
import VSCode from "../assets/icons/VSCode.png";

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.skillContainer}>
        <div className={styles.core}>
          <h4>Core Skills</h4>
          <ul className={styles.coreList}>
            <ListItem img={ReactJS} content={"React"} />
            <ListItem img={NodeJs} content={"NodeJs"} />
            <ListItem img={JavaScript} content={"JavaScript"} />
            <ListItem img={TypeScript} content={"TypeScript"} />
          </ul>
        </div>
        <div className={styles.secondary}>
          <h4>Additional Skills</h4>
          <ul className={styles.secondaryList}>
            <ListItem img={HTML5} content={"HTML5"} />
            <ListItem img={CSS3} content={"CSS3"} />
            <ListItem img={MongoDB} content={"MongoDB"} />
            <ListItem img={PostgreSQL} content={"PostgreSQL"} />
            <ListItem img={Bootstrap} content={"Bootstrap"} />
            <ListItem img={jQuery} content={"jQuery"} />
            <ListItem img={Sass} content={"Sass"} />
            <ListItem img={Git} content={"Git"} />
            <ListItem img={GitHub} content={"GitHub"} />
            <ListItem img={VSCode} content={"VSCode"} />
          </ul>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Skills;
