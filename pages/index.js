import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div  >
        <div className={styles.circle}></div>
        <div className={styles.spine}></div>
      </div>
      <div className={styles.container}>
        <h1>
          <span className={styles.firstname}> Chirag</span>Parmar:$
          <br />
          <span className={styles.help}>type help to start</span>
        </h1>
        <p></p>

        <Terminal />
      </div>
    </div>
  );
}
