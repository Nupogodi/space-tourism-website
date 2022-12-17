import React, { useState } from 'react';

// components
import {
  Statistics,
  Introduction,
  Description,
  Menu,
  Image,
} from './components';

// constants
import { DESTINATIONS } from './destinations';

// styles
import styles from './Destination.module.css';

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    DESTINATIONS.moon
  );

  const { title, description, distance, travelTime, id, image } =
    selectedDestination;

  return (
    <div className={styles.destination}>
      <section className={styles.introduction}>
        <Introduction />
        <div className={styles.body}>
          <div className={styles.image}>
            <Image image={image} />
          </div>
          <div className={styles.content}>
            <Menu activeTabID={id} onClick={setSelectedDestination} />
            <Description description={description} title={title} />
            <div className='divider' />
            <div className={styles.statistics}>
              <Statistics distance={distance} travelTime={travelTime} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
