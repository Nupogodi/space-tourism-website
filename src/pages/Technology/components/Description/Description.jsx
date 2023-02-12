import React from "react";
import PropTypes from "prop-types";

// components
import { Typography } from "components";

// styles
import styles from "./Description.module.css";

export const Description = ({ title, description }) => (
    <div className={styles.description}>
      <div className={styles.marginBottom}>
        <Typography preset='subHeading2' tag='p'>
          The Terminology...
        </Typography>
        <Typography preset='heading3' tag='h1'>
          {title}
        </Typography>
      </div>
      <Typography preset='text' tag='p'>
        {description}
      </Typography>
    </div>
  )

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
