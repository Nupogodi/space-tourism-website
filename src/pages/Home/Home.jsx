import React from 'react';

// sections
import { Introduction } from './sections/Introduction/Introduction';

// styles
import styles from './Home.module.css';

export const Home = () => (
  <div className={styles.home}>
    <div className={styles.container}>
      <Introduction />
    </div>
  </div>
);
