import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <img src={getImageUrl("hero/hero.jpg")} alt="Hero image of me" className={styles.heroImg}/>
            <h1 className={styles.title}>Hi, I'm Prathamesh</h1>
            <p className={styles.description}>
                I'm a Computer Engineering student with experience in Flutter, React, Node.js, Firebase, and IoT development. 
                Passionate about building innovative applications and IoT systems. Let's connect!
            </p>
            <a href="mailto:prathameshwadekar13@gmail.com" className={styles.contactBtn}>Contact Me</a>
            
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    </section>  
  );
}
