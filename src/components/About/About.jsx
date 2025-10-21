import React from 'react'
import { getImageUrl } from './../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='Me sitting with laptop' className={styles.aboutImg} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon' />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I specialize in building responsive and optimized web and mobile applications using React, Flutter, and modern UI technologies.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon' />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Experienced in developing efficient and scalable backend systems with Firebase, PHP, and MySQL, ensuring seamless data handling and security.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt='Flutter Icon' />
            <div className={styles.aboutItemText}>
              <h3>Flutter App Developer</h3>
              <p>Developed multiple mobile apps with Flutter and Firebase, implementing real-time data sync, authentication, and dynamic UI components.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt='Data Icon' />
            <div className={styles.aboutItemText}>
              <h3>Data & IoT Enthusiast</h3>
              <p>Designed IoT systems using ESP32 & Arduino, collecting and visualizing real-time sensor data. Passionate about data-driven insights and automation.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
