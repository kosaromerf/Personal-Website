import Navigation from "./Navigation";
import Text from "./Text";
import Header from "./Header";
import styles from "../Styles/App.module.css";

const App = () => {
  return (
    <div className={styles.main}>
      <Header content={"About"} />
      <Text
        content={`I'm Omer Kosar, a budding Frontend Web developer with a Mechanical
          Engineering background. I have a passion for crafting user-friendly web
          applications.
          As a voracious learner, I devour knowledge to fuel my journey. Eager to
          channel my analytical skills and passion into innovative, I'm on a quest to create impactful digital experiences.`}
      />
      <Navigation />
    </div>
  );
};

export default App;
