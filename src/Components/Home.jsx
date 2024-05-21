import styles from "../Styles/Home.module.css";
import welcomeLight from "../assets/welcomeLight.jpeg";

const App = () => {
  return (
    <div className={styles.main} id="homePage">
      <img src={welcomeLight} alt="welcome image of a penguan coding" />
      <p className={styles.welcomeText}>
        I'm Omer Kosar, a budding Frontend Web developer with a Mechanical
        Engineering background. I have a passion for crafting user-friendly web
        applications. Eager to channel my analytical skills and passion into
        innovative projects, I'm on a quest to create impactful digital
        experiences.
      </p>
    </div>
  );
};

export default App;
