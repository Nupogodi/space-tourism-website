import React from "react";
import PropTypes from "prop-types";

export const Image = ({ src, alt }) => (
  <picture>
    <source srcSet={src.desktop} media='(min-width: 1300px)' />
    <img src={src.mobile} alt={alt} />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }).isRequired,
};
