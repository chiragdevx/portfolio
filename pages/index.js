import Terminal from "../components/Primary/Terminal";
import styles from "../styles/Home.module.css";
import Link from "next/link";
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
        
        <div>
          Type "help" to see available commands. All Commands are case
          sensitive.
        </div>

        <Terminal />
      </div>
      
      <Link href='/o/'>
      <div className={styles.boringTxt}>Boring portfolio &gt;</div>
          </Link>
    </div>
  );
}
