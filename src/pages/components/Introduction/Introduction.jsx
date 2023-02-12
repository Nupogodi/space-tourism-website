import React from "react";
import PropTypes from "prop-types";

// components
import { Typography } from "components";

// styles
import styles from "./Introduction.module.css";

export const Introduction = ({ text, prefix }) => (
  <div className={styles.container}>
    <Typography className={styles.prefix} tag='p' preset='heading5'>
      {prefix}
    </Typography>
    <Typography className={styles.text} tag='h1' preset='heading5'>
      {text}
    </Typography>
  </div>
);

Introduction.propTypes = {
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
};
