import Navigation from "./Navigation";
import styles from "../Styles/App.module.css";
import welcomeLight from "../assets/welcomeLight.jpeg";
import Contact from "./Contact";

const App = () => {
  return (
    <div className={styles.main}>
      <img src={welcomeLight} alt="welcome image of a penguan coding" />
      <p className={styles.welcomeText}>
        I'm Omer Kosar, a budding Frontend Web developer with a Mechanical
        Engineering background. I have a passion for crafting user-friendly web
        applications. Eager to channel my analytical skills and passion into
        innovative projects, I'm on a quest to create impactful digital
        experiences.
      </p>
      <Navigation />
      <Contact />
    </div>
  );
};

export default App;
