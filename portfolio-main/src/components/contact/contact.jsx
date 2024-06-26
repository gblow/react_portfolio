import React from "react";
import styles from "./contact.module.css";
import email from "../../assets/mail.png";
import linkedin from "../../assets/ln.png";
import github from "../../assets/gh.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Connect with ME!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:giovanniblow@email.com">giovanniblow@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com">Coming soon!</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/gblow">github.com/gblow</a>
        </li>
      </ul>
    </footer>
  );
};