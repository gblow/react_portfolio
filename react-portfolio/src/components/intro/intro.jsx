import React from 'react';
import styles from "../../components/intro/intro.module.css";
import profilePic from "../../assets/profilepic.png";


export const Intro = () => {
    return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <img src={profilePic} alt="Profile Pic" className={styles.introImg} />
            <p className={styles.description}>As an HR manager transitioning into web development, I bring a unique perspective shaped by my experience in talent acquisition, team management, system management and organizational dynamics. With a keen eye for detail, problem-solving resume, and a passion for continuous learning, I am eager to leverage my background to create intuitive, user-friendly web experiences. My goal is to combine my HR expertise with technical proficiency to contribute meaningfully to projects and drive innovation in the dynamic field of web development.</p>
        
        </div>
    </section>
    );
};