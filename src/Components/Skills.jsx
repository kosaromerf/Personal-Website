import React from "react";
import Navigation from "./Navigation";
import Text from "./Text";
import Header from "./Header";
import styles from "../Styles/Skills.module.css";

const Skills = () => {
  return (
    <div>
      <Header content={"Skills"} />
      <Text
        content={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eum libero eveniet cumque blanditiis aliquam est debitis? Unde modi fugiat rerum itaque dignissimos. Quam magnam ex placeat harum hic quibusdam."
        }
      />
      <Navigation />
    </div>
  );
};

export default Skills;
