import React from 'react';
import styles from './home.module.css';

const Home = ({ homeName }) => (
  <>
    <h1>Hello</h1>
    <div className={styles.para}>{homeName}</div>
  </>
);

export default Home;
