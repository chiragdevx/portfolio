import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.circle}></div>
        <div className={styles.spine}></div>
      </div>
      <div className={styles.container}>
        <h1>
          <span className={styles.firstname}> Chirag</span>Parmar:$
          <br />
          <span className={styles.help}>Welcome to ShellFolio v2001.02!</span>
        </h1>
        <p>
          Type "help" to see available commands. All Commands are case
          sensitive.
        </p>

        <Terminal />
      </div>
      <p className={styles.boringTxt}>Boring portfolio &gt;</p>
    </div>
  );
}
