import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import styles from "../Styles/Contact.module.css";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <ContactItem Component={TfiEmail} name={"E-Mail"} destination={"#"} />
      <ContactItem
        Component={GrLinkedinOption}
        name={"LinkedIn"}
        destination={"#"}
      />
      <ContactItem Component={FiGithub} name={"GitHub"} destination={"#"} />
      <ContactItem
        Component={TbBrandFiverr}
        name={"Fiverr"}
        destination={"#"}
      />
      <ContactItem
        Component={SiFreelancer}
        name={"Freelancer"}
        destination={"#"}
      />
      <ContactItem Component={FaUpwork} name={"Upwork"} destination={"#"} />
    </div>
  );
};

export default Contact;
