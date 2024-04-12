import React from "react";
import styles from "./about.module.css"

export const About = () => {
    return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hi! I'm Giovanni. </h2>
      <h3> I am a HR Manager who has embarked on a journey to learn fullstack development. I am now have experience in... </h3>
      <div className={styles.content}>
      
   <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={pointer} alt="Cursor icon" className={styles.cursor} /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend & Backend Developement</h3>
              <p>
                I have built and enhanced applications that are highly responsive using frontend and backend development.
              </p>
            </div>
            </li>
          <li className={styles.aboutItem}>
            {/* <img src={webDesign} alt="UI icon" className={styles.ui} /> */}
            <div className={styles.aboutItemText}>
              <h3>User Experience and User Interface Design</h3>
              <p>
                I have designed countless web applications with unique and user friendly designs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};