import React from 'react';
import propTypes from 'prop-types';

// components
import { Typography } from 'components';

// styles
import styles from './Information.module.css';

export const Information = ({ role, name, description }) => (
    <div className={styles.information}>
      <Typography className={styles.role} tag='p' preset='heading4'>
        {role}
      </Typography>
      <Typography className={styles.name} tag='h2' preset='heading3'>
        {name}
      </Typography>
      <div className='textContainer'>
        <Typography tag='h2' preset='text'>
          {description}
        </Typography>
      </div>
    </div>
  )

Information.propTypes = {
  role: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
