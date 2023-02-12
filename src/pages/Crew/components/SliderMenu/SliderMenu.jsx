import React from "react";
import propTypes from "prop-types";

// components
import { Button } from "components";

// constants
import { CREW_MEMBERS_ARRAY } from "pages/Crew/crewConstants";

// styles
import styles from "./SliderMenu.module.css";

export const SliderMenu = ({ onClick, activeMemberID }) => (
    <ul className={styles.slider}>
      {CREW_MEMBERS_ARRAY.map((member) => (
        <li className={styles.slide} key={member.id}>
          <Button
            styled='wrapper'
            className={`${styles.btn} ${
              member.id === activeMemberID ? styles.active : ""
            }`}
            onClick={() => onClick(member)}
          />
        </li>
      ))}
    </ul>
  )

SliderMenu.propTypes = {
  onClick: propTypes.func.isRequired,
  activeMemberID: propTypes.number.isRequired,
};
