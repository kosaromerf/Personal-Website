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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            mollitia voluptates praesentium ex accusantium eos pariatur, nemo
            aliquam aliquid omnis vel fuga culpa nostrum, beatae cupiditate
            ullam qui magni debitis deleniti dicta facilis. Quas tenetur
            consequatur sed. Facere, impedit, nulla laborum rerum dolorem esse
            repellat temporibus beatae praesentium animi assumenda voluptatum
            corrupti eveniet. Distinctio natus ullam officia, quia, recusandae
            necessitatibus dolores vel facilis provident ex dicta, reprehenderit
            doloremque eius aut facere nisi maxime voluptate fugiat soluta! In
            cupiditate quasi exercitationem error illum odio. Possimus assumenda
            molestias sint earum exercitationem laudantium quam! Doloribus, eos
            magnam, pariatur, inventore laboriosam voluptas at veniam vel
            laborum eligendi odio vero molestias quaerat totam corporis ab
            corrupti voluptates a facilis. Dolores totam ea animi vel suscipit,
            earum laborum illum non doloremque laudantium. Aspernatur eius
            dolores officia labore, totam eos perferendis odio natus? Cumque
            magni maiores consequuntur molestiae doloribus ratione facilis iure
            beatae debitis, hic labore necessitatibus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id in repellat ipsum minima
            cumque quidem blanditiis ipsam, amet, illum incidunt accusamus ex
            nostrum qui dolorem, voluptatibus aperiam omnis odit? Fugiat saepe
            debitis reiciendis dolorem aspernatur alias, cupiditate non illo,
            ducimus fuga voluptatem recusandae possimus? Optio, magni. Dolor
            officiis sapiente enim dignissimos in non! Ullam explicabo modi
            illum beatae magni recusandae officia doloribus tempora quia eos
            quibusdam sint consectetur inventore, porro cumque et necessitatibus
            praesentium in. Eaque, rem sunt. Sed repellat provident architecto
            autem pariatur quae explicabo ducimus iure soluta, ex voluptatem
            molestiae corporis harum laborum recusandae in placeat possimus
            nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            quam aperiam id similique nulla quasi suscipit labore dolorem atque
            ab odio veniam rem minus, provident reprehenderit esse! Officia
            fugit placeat repellendus, molestias quae nisi sequi veniam atque
            eum id esse. Adipisci commodi dicta velit ratione unde, sapiente
            dolores eius a, recusandae minima consectetur voluptas perspiciatis.
            Hic, nemo natus non quos ullam autem id quas earum nihil, laboriosam
            repellat quae minus esse nostrum fugiat ut repudiandae aut
            necessitatibus maxime voluptate, deserunt libero! Corporis cum eos
            magnam officiis beatae praesentium rerum! Autem culpa recusandae
            deserunt molestias obcaecati odio mollitia necessitatibus harum
            esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus quae dolorem eos necessitatibus beatae. Eum modi nobis
            debitis ipsum sint a magnam expedita non ea eos culpa saepe maxime
            adipisci, tempora amet facilis aspernatur asperiores, repellendus ad
            ab. Est excepturi consequatur culpa sapiente assumenda totam rem,
            labore quod tempore voluptatum possimus, atque deleniti quam
            perferendis. Sapiente laudantium officiis dicta exercitationem
            ducimus, qui pariatur eos omnis eveniet repellat. Debitis, similique
            modi fuga fugit, eligendi rerum quo eum cumque doloribus quibusdam
            explicabo deleniti error suscipit? Laudantium aut accusamus
            voluptatem fugit maiores unde, repellendus, distinctio esse ipsam
            fuga ducimus molestias ad quisquam nesciunt!
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
