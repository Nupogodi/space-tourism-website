import React from 'react';

// components
import { Button, Typography } from 'components';

import { DESTINATIONS } from '../../destinations';

// styles
import styles from './Menu.module.css';

export function Menu({ onClick, activeTabID }) {
  return (
    <nav aria-labelledby='page-navigation'>
      <ul className={styles.menu}>
        {Object.values(DESTINATIONS).map((destination) => (
          <li
            key={destination.id}
            className={`${styles.item} ${
              activeTabID === destination.id ? styles.active : undefined
            }`}
          >
            <Button styled='wrapper' onClick={() => onClick(destination)}>
              <Typography preset='navText'>{destination.title}</Typography>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
