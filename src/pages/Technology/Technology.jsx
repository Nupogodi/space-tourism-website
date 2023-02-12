import React, { useState } from "react";

// components
import { Introduction } from "pages";
import { Description, Image, Menu } from "./components";

// constants
import { TECHNOLOGIES } from "./technologyConstants";

// styles
import styles from "./Technology.module.css";

export const Technology = () => {
  const [activeSlide, setActiveSlide] = useState(TECHNOLOGIES.launchVehicle);

  const { title, image, description, id } = activeSlide;

  return (
    <div className={`${styles.technology} flexFlow`}>
      <section className={styles.section}>
        <div className={styles.introduction}>
          <Introduction text='Space Launch 101' prefix='03' />
        </div>
        <div className={styles.description}>
          <div className={styles.image}>
            <Image alt={image.alt} src={image.src} />
          </div>
          <div className={styles.content}>
            <div className={styles.menu}>
              <Menu onClick={setActiveSlide} activeSlideID={id} />
            </div>
            <div className={styles.textContainer}>
              <Description title={title} description={description} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
