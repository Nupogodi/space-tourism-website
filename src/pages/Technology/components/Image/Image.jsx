import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./Image.module.css";

export function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
