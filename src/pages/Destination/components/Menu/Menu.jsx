import React from "react";
import PropTypes from "prop-types";

// components
import { Button, Typography } from "components";

import { DESTINATIONS_ARRAY } from "../../destinationConstants";

// styles
import styles from "./Menu.module.css";

export const Menu = ({ onClick, activeTabID }) => (
  <nav aria-labelledby='page-navigation'>
    <ul className={styles.menu}>
      {DESTINATIONS_ARRAY.map((destination) => (
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

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeTabID: PropTypes.number.isRequired,
};
