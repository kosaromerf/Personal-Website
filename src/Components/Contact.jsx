import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import styles from "../Styles/Contact.module.css";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <ContactItem
        Component={TfiEmail}
        name={"E-Mail"}
        destination={"mailto:kosaromerf@gmail.com"}
      />
      <ContactItem
        Component={GrLinkedinOption}
        name={"LinkedIn"}
        destination={"https://www.linkedin.com/in/kosaromerf/"}
      />
      <ContactItem
        Component={FiGithub}
        name={"GitHub"}
        destination={"https://github.com/kosaromerf"}
      />
      <ContactItem
        Component={TbBrandFiverr}
        name={"Fiverr"}
        destination={"https://www.fiverr.com/kosaromer"}
      />
      <ContactItem
        Component={SiFreelancer}
        name={"Freelancer"}
        destination={"https://www.freelancer.com/u/KosarOmer?sb=t"}
      />
      <ContactItem
        Component={FaUpwork}
        name={"Upwork"}
        destination={"https://www.upwork.com/freelancers/~015701b0dec58e4016"}
      />
    </div>
  );
};

export default Contact;
