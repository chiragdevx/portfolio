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
<<<<<<< HEAD
        <h1>
          <span className={styles.firstname}> Chirag</span>Parmar:$
          <br />
          <span className={styles.help}>Welcome to ShellFolio v2001.02!</span>
        </h1>
        
        <div>
          Type "help" to see available commands. All Commands are case
          sensitive.
=======
        <div className={styles.headings}>
          <h1>
            <span className={styles.firstname}> Chirag</span>Parmar:$
            <br />
            <div className={styles.help}>Welcome to ShellFolio v2001.02!</div>
          </h1>

          <p>
            Type "help" to see available commands. All Commands are case
            insensitive.
          </p>
>>>>>>> a2d62e85ed26eaa843f57e84d79b6c27847b703d
        </div>

        <Terminal />
      </div>
<<<<<<< HEAD
      
      <Link href='/o/'>
      <div className={styles.boringTxt}>Boring portfolio &gt;</div>
          </Link>
     
=======

      {/* <Link href="/o/">
        <p className={styles.boringTxt}>Boring portfolio &gt;</p>
      </Link> */}
>>>>>>> a2d62e85ed26eaa843f57e84d79b6c27847b703d
    </div>
  );
}
