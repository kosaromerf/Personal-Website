import React, { useEffect } from "react";
import styles from "../Styles/About.module.css";
import { useState } from "react";
import Highlights from "./Highlights";

const About = () => {
  const [highlights, setHighlights] = useState([
    {
      name: "Portfolio Webpage v2",
      date: "Jun 2024",
      description:
        "A website to showcase my skills. Improved by React Router and moduler CSS styling",
      isProject: true,
      urls: "https://personalwebsite-rouge.vercel.app/",
    },
    {
      name: "Portfolio Webpage v1",
      date: "May 2024",
      description:
        "A website to showcase my skills. Single page, responsive, accesible",
      isProject: true,
      urls: "https://portfolio-kosaromerfs-projects.vercel.app/",
    },
    {
      name: '"Front End Development Libraries" course and certification on freeCodeCamp',
      date: "Apr 2024 - May 2024",
      description:
        "Bootstrap, SASS, jQuerry, React and Redux. Very extensive course about different aspects of FrontEnd development from libraies to State management. Created 5 projects to get the certification.",
      isProject: true,
      urls: "https://www.freecodecamp.org/certification/OmerFarukKosar/front-end-development-libraries",
    },
    {
      name: '"Relational Database" course and certification on freeCodeCamp',
      date: "Apr 2024",
      description:
        "Learned about using bash commands and databases like SQL. Created 5 projects to get the certification.",
      isProject: true,
      urls: "https://www.freecodecamp.org/certification/OmerFarukKosar/relational-database-v8",
    },
    {
      name: '"JavaScript Algorithms and Data Structures (NEW)" course and certification on freeCodeCamp',
      date: "Mar 2024",
      description:
        "New course for JavaScript. Created 5 projects to get the certification.",
      isProject: true,
      urls: "https://www.freecodecamp.org/certification/OmerFarukKosar/javascript-algorithms-and-data-structures-v8",
    },
    {
      name: '"React" course in Odin Project',
      date: "Dec 2023 - Feb 2024",
      description:
        "The most popular JavaScript library for building UI. This course includes class and functional components, hooks and state managment in addition to fundementals",
      isProject: true,
      urls: "https://github.com/kosaromerf/Odin-Project-Learning-React",
    },
    {
      name: '"Intermediate,Advance HTML and CSS" courses in Odin Project',
      date: "Agu 2023 - Nov 2023",
      description:
        "These two courses gives essential information about Accesiblity and SEO principles in addition to that many neccesary CSS funtinalty like Flexbox, Grid and animations",
      isProject: true,
      urls: "https://github.com/kosaromerf/Odin-Project-Learning-Intermediate-HTML-CSS",
    },
    {
      name: '"JavaScript Algorithms and Data Structures" course and certification on freeCodeCamp',
      date: "Jul 2023",
      description:
        "Learned about JavaScript fundementals and two of the most important styles of programing OOP and FP. Created 5 simple projects to get the certification.",
      isProject: true,
      urls: "https://www.freecodecamp.org/certification/OmerFarukKosar/javascript-algorithms-and-data-structures",
    },
    {
      name: "Foundations course in Odin Project",
      date: "Jun 2023 - Jul 2023",
      description:
        "Foundations course gives the fundementals of Frontend development. There are many suggested projects.",
      isProject: true,
      urls: "https://github.com/kosaromerf/Odin-Project-Learning-Foundations",
    },
    {
      name: '"Responsive Web Desing" course and certification on freeCodeCamp',
      date: "Jun 2023",
      description:
        "Learned about fundementals of Frontend Development. Created 5 simple projects to get the certification.",
      isProject: true,
      urls: "https://www.freecodecamp.org/certification/OmerFarukKosar/responsive-web-design",
    },
    {
      name: "Start of the Journey",
      date: "May 2023",
      description:
        "This is the start of my web developer journey. Started to learn about front end usng freeCodeCamp, Odin Project and numerous other tutorials.",
      isProject: false,
    },
  ]);
  const [textCollapsed, setTextCollapsed] = useState([false, false]);

  const highlightsSection = highlights.map((e, index) => {
    return (
      <Highlights
        name={e.name}
        date={e.date}
        description={e.description}
        isProject={e.isProject}
        urls={e.urls}
        key={index}
      />
    );
  });

  useEffect(() => {
    if (textCollapsed[0]) {
      document.getElementById("txt").style.display = "none";
    } else {
      document.getElementById("txt").style.display = "flex";
    }

    if (textCollapsed[1]) {
      document.getElementById("timeline").style.display = "none";
    } else {
      document.getElementById("timeline").style.display = "flex";
    }
  }, [textCollapsed]);

  return (
    <div className={styles.aboutContainer} id="aboutPage">
      <div className={styles.aboutMe}>
        <h2 className={styles.header}>Web Developer Journey</h2>
        <div className={styles.collapse}>
          <button
            className={styles.collapseBtn}
            onClick={() =>
              setTextCollapsed([!textCollapsed[0], textCollapsed[1]])
            }
          >
            {textCollapsed[0] ? "About Me [+]" : "About Me [-]"}
          </button>
          <p className={styles.collapseText} id="txt">
            My journey into web development began out of a desire to rebuild my
            career and my life. With a strong passion for building things and a
            keen analytical mind, I found myself naturally drawn to the world of
            web development.
            <br />
            <br />
            I originally pursued a career in stock market trading, but after
            several years, I realized it wasn't the right fit for me. I needed a
            fresh start, something that combined my love for creating and
            problem-solving. That's when I decided to dive into web development.
            Passion for knowledge gave me the push I needed to start learning,
            and I haven't looked back since.
            <br />
            <br />
            What sets me apart as a web developer is my relentless pursuit of
            knowledge and my ability to apply what I've learned effectively. I'm
            a hard worker, and when I'm passionate about something, I immerse
            myself fully in it. My background in mechanical engineering has
            honed my problem-solving skills and analytical thinking, both of
            which are crucial in web development. I believe that the ability to
            find and assimilate knowledge is one of the most important aspects
            of web development, given the vast and ever-evolving nature of the
            field.
            <br />
            <br />
            Long-term, I aspire to build a successful career in web development.
            While front-end development has been a great starting point, I'm
            eager to expand my skills. I'm excited about the future and the
            endless possibilities that web development holds. With my analytical
            mind, passion for learning, and dedication to creating impactful
            digital experiences, I am confident in my ability to make
            significant contributions to the tech industry.
          </p>
        </div>
      </div>
      <div className={styles.highlightsContainer}>
        <h2 className={styles.timeline}>Timeline</h2>
        <div className={styles.collapse}>
          <button
            className={styles.collapseBtn}
            onClick={() =>
              setTextCollapsed([textCollapsed[0], !textCollapsed[1]])
            }
          >
            {textCollapsed[1] ? "Timeline [+]" : "Timeline [-]"}
          </button>
        </div>
        <div id="timeline" className={styles.timelineContainer}>
          {highlightsSection}
        </div>
      </div>
    </div>
  );
};

export default About;
