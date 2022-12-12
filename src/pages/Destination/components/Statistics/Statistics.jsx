import React from 'react';
import PropTypes from 'prop-types';

// components
import { Typography } from 'components';

// styles
import styles from './Statistics.module.css';

export const Statistics = ({ distance, travelTime }) => (
      <ul className={styles.statistics}>
        <li className={styles.stat}>
          <Typography tag='p' preset='subHeading2'>
            Avg. Distance
          </Typography>
          <Typography tag='p' preset='subHeading1'>
            {distance}
          </Typography>
        </li>
        <li className={styles.stat}>
          <Typography tag='p' preset='subHeading2'>
            Est. travel time
          </Typography>
          <Typography tag='p' preset='subHeading1'>
            {travelTime}
          </Typography>
        </li>
      </ul>
  )

Statistics.propTypes = {
  distance: PropTypes.string.isRequired,
  travelTime: PropTypes.string.isRequired,
};
