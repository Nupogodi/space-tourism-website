import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Image.module.css';

export const Image = ({ image = null }) => (
    <div className={styles.image}>
      <img src={image.src} alt={image.alt} />
    </div>
  )

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

Image.defaultProps = {
  image: null,
};
