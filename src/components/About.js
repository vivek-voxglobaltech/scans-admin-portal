import React from 'react';
import styles from './about.module.css';
import AboutMe from './AboutMe';

function About() {
  return (
    <>
      <div className={styles.para}>About</div>
      <AboutMe />
    </>
  );
}

export default About;
