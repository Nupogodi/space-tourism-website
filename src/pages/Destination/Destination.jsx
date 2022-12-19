import React, { useState } from "react";

// components
import { Introduction } from "pages";
import { Statistics, Description, Menu, Image } from "./components";

// constants
import { DESTINATIONS } from "./destinationConstants";

// styles
import styles from "./Destination.module.css";

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    DESTINATIONS.moon
  );

  const { title, description, distance, travelTime, id, image } =
    selectedDestination;

  return (
    <div className={styles.destination}>
      <section className={styles.introduction}>
        <Introduction text='Pick your destination' prefix='01' />
        <div className={styles.body}>
          <div className={styles.image}>
            <Image image={image} />
          </div>
          <div className={`flexLayout ${styles.content}`}>
            <Menu activeTabID={id} onClick={setSelectedDestination} />
            <div className={styles.description}>
              <Description description={description} title={title} />
            </div>
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
