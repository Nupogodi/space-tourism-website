import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./Image.module.css";

export function Image({ src, alt }) {
  return (
    <picture>
      <source srcSet={src.desktop} media='(min-width: 1300px)' />
      <img src={src.mobile} alt={alt} />
    </picture>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }).isRequired,
};
