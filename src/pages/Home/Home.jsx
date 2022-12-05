import React from 'react';

// components
import { Navbar } from 'components';

// sections
import { Introduction } from './sections/Introduction/Introduction';

// styles
import styles from './Home.module.css';

export const Home = () => (
  <div className={styles.home}>
    <header className={styles.header}>
      <Navbar />
    </header>
    <main className={styles.main}>
      <div className={`container padded ${styles.container}`}>
        <Introduction />
      </div>
    </main>
  </div>
);
