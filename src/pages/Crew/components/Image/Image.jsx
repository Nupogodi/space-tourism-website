import React from 'react';
import propTypes from 'prop-types';

// styles
import styles from './Image.module.css';

export function Image({ src, alt }) {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
