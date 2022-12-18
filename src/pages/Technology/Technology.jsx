import React from "react";

// components
import { Introduction } from "pages";
import { Image } from "./components/Image/Image";

// constants

// styles
import styles from "./Technology.module.css";

export function Technology() {
  return (
    <div className={styles.technology}>
      <section className={styles.section}>
        <Introduction text='Space Launch 101' prefix='03' />
        <Image alt='' src='' />
      </section>
    </div>
  );
}
