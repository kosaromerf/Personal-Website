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

  return (
    <div className={styles.aboutContainer} id="aboutPage">
      <div className={styles.aboutMe}>
        <h2>Web Developer Journey</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          mollitia voluptates praesentium ex accusantium eos pariatur, nemo
          aliquam aliquid omnis vel fuga culpa nostrum, beatae cupiditate ullam
          qui magni debitis deleniti dicta facilis. Quas tenetur consequatur
          sed. Facere, impedit, nulla laborum rerum dolorem esse repellat
          temporibus beatae praesentium animi assumenda voluptatum corrupti
          eveniet. Distinctio natus ullam officia, quia, recusandae
          necessitatibus dolores vel facilis provident ex dicta, reprehenderit
          doloremque eius aut facere nisi maxime voluptate fugiat soluta! In
          cupiditate quasi exercitationem error illum odio. Possimus assumenda
          molestias sint earum exercitationem laudantium quam! Doloribus, eos
          magnam, pariatur, inventore laboriosam voluptas at veniam vel laborum
          eligendi odio vero molestias quaerat totam corporis ab corrupti
          voluptates a facilis. Dolores totam ea animi vel suscipit, earum
          laborum illum non doloremque laudantium. Aspernatur eius dolores
          officia labore, totam eos perferendis odio natus? Cumque magni maiores
          consequuntur molestiae doloribus ratione facilis iure beatae debitis,
          hic labore necessitatibus.
        </p>
      </div>
      <div className={styles.highlightsContainer}>{highlightsSection}</div>
    </div>
  );
};

export default About;
