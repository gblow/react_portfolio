
import React from 'react';
import styles from './skill.module.css'; //create a new CSS module or reuse the about.module.css


export const Skill = () => {
    return (
        <section className={styles.container} id="skill">
            <h2 className={styles.title}>skill/Proficiencies</h2>
            {/* <img src={memojiHeart} alt="memoji" className={styles.skillImage}/> */}
            <div className={styles.content}>
                <ul className={styles.skillItems}>
                    <li className={styles.skillItem}>
                        {/* <img src={educationIcon} alt="Education icon" className={styles.icon} /> */}
                        <div className={styles.skillItemText}>
                            <h3>Frontend Proficiencies</h3>
                            <p>- HTML5, CSS, JavaScript</p>
                            <p>- jQuery, Express, Node.js, React, Bootstrap</p>
                        </div>
                    </li>
                    <li className={styles.skillItem}>
                        {/* <img src={experienceIcon} alt="Experience icon" className={styles.icon} /> */}
                        <div className={styles.skillItemText}>
                            <h3>Backend Proficiencies</h3>
                            <p>- Node.js, Javascript</p>
                            <p>- Express.js for Node</p>
                            <p>- Relational Databases (MySQL, SQL Server)</p>
                        </div>
                    </li>
                </ul>
            
            </div>
        </section>
    );
};
