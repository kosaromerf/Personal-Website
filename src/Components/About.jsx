import React, { useEffect } from "react";
import styles from "../Styles/About.module.css";
import { useState } from "react";
import Highlights from "./Highlights";

const About = () => {
  const [highlights, setHighlights] = useState([
    {
      name: "Portfolio Webpage v1",
      date: "Mar 2023 - Apr 2024",
      description:
        "A website to showcase my skills A website to showcase my skills A website to showcase my skills A website to showcase my skills A website to showcase my skills",
      isProject: true,
      urls: "#",
    },
    {
      name: "React Router",
      date: "Apr 2023",
      description: "Getting into routers",
      isProject: false,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
    },
    {
      name: "Portfolio Webpage v2",
      date: "Apr 2023 - May 2024",
      description: "A website to showcase my skills",
      isProject: true,
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
            si sequi veniam atque eum id esse. Adipisci commodi dicta velit
            ratione unde, sapiente dolores eius a, recusandae minima consectetur
            voluptas perspiciatis. Hic, nemo natus non quos ullam autem id quas
            earum nihil, laboriosam repellat quae minus esse nostrum fugiat ut
            repudiandae aut necessitatibus maxime voluptate, deserunt libero!
            Corporis cum eos magnam officiis beatae praesentium rerum! Autem
            culpa recusandae deserunt molestias obcaecati odio mollitia
            necessitatibus harum esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus quae dolorem eos necessitatibus beatae.
            Eum modi nobis debitis ipsum sint a magnam expedita non ea eos culpa
            saepe maxime adipisci, tempora amet facilis aspernatur asperiores,
            repellendus ad ab. Est excepturi consequatur culpa sapiente
            assumenda totam rem, labore quod tempore voluptatum possimus, atque
            deleniti quam perferendis. Sapiente laudantium officiis dicta
            exercitationem ducimus, qui pariatur eos omnis eveniet repellat.
            Debitis, similique modi fuga fugit, eligendi rerum quo eum cumque
            doloribus quibusdam explicabo deleniti error suscipit? Laudantium
            aut accusamus voluptatem fugit maiores unde, repellendus, distinctio
            esse ipsam fuga ducimus molestias ad quisquam nesciunt!
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
