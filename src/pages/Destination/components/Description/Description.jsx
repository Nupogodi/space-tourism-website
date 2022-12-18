import React from 'react';
import PropTypes from 'prop-types';

// components
import { Typography } from 'components';

import { DESTINATIONS } from '../../destinations';

// styles
import styles from './Description.module.css';

export const Description = ({ description, title }) => (
  <section className={styles.description}>
    <Typography tag='h2' preset='heading2'>
      {title}
    </Typography>
    <Typography tag='p' preset='text'>
      {description}
    </Typography>
  </section>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
