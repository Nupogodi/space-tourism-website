import React from "react";
import PropTypes from "prop-types";

import { Button } from "components";

// constants
import { TECHNOLOGIES_ARRAY } from "../../technologyConstants";

// styles
import styles from "./Menu.module.css";

export function Menu({ onClick, activeSlideID }) {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {TECHNOLOGIES_ARRAY.map((technology, index) => {
          const { id } = technology;
          return (
            <li
              key={id}
              className={`${styles.menuItem} ${
                activeSlideID === id ? styles.active : ""
              }`}
            >
              <Button styled='wrapper' onClick={() => onClick(technology)}>
                {index + 1}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeSlideID: PropTypes.number.isRequired,
};
