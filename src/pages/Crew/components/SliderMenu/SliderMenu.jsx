import React from 'react';
import propTypes from 'prop-types';

// components
import { Button } from 'components';

// constants
import { CREW_MEMBERS } from 'pages/Crew/crewInfo';

// styles
import styles from './SliderMenu.module.css';

export function SliderMenu({ onClick, activeMember }) {
  return (
    <ul className={styles.slider}>
      {Object.values(CREW_MEMBERS).map((member) => (
        <li className={styles.slide} key={member.name}>
          <Button
            styled='wrapper'
            className={`${styles.btn} ${
              member.id === activeMember.id ? styles.active : ''
            }`}
            onClick={() => onClick(member)}
          />
        </li>
      ))}
    </ul>
  );
}

SliderMenu.propTypes = {
  onClick: propTypes.func.isRequired,
};
