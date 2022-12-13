import React from 'react';
import PropTypes from 'prop-types';

// components
import { Typography } from 'components';

// styles
import styles from './Introduction.module.css';

export const Introduction = () => (
    <div>
      <Typography className={styles.prefix} tag='h1' preset='heading5'>
        Pick your destination
      </Typography>
    </div>
  )

Introduction.propTypes = {};

Introduction.defaultProps = {};
