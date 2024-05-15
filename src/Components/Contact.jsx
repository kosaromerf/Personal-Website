import React from "react";
import Navigation from "./Navigation";
import Text from "./Text";
import Header from "./Header";
import styles from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <Header content={"Contact"} />
      <Text
        content={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eum libero eveniet cumque blanditiis aliquam est debitis? Unde modi fugiat rerum itaque dignissimos. Quam magnam ex placeat harum hic quibusdam."
        }
      />
      <Navigation />
    </div>
  );
};

export default Contact;
