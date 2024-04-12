
import React from 'react';
import styles from './skill.module.css'; //create a new CSS module or reuse the about.module.css


export const Skill = () => {
    return (
        <section className={styles.container} id="skill">
            <h2 className={styles.title}>skill/Proficiencies</h2>
            <div className={styles.content}>
                <ul className={styles.skillItems}>
                    <li className={styles.skillItem}>
                        {/* <img src={educationIcon} alt="Education icon" className={styles.icon} /> */}
                        <div className={styles.skillItemText}>
                            <h3>Frontend & Backend Skilss</h3>
                            <p>- HTML, CSS, JavaScript</p>
                            <p>- jQuery, Express/Node.js, Bootstrap</p>


                            <p>- Express.js for Node</p>
                            <p>- Server Databases (MySQL, SQL Server)</p>
                        </div>
                    </li>

                </ul>
            
            </div>
        </section>
    );
};
