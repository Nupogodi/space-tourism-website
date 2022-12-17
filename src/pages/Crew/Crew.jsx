import React, { useState } from 'react';

// components
import { Image, Information, Introduction, SliderMenu } from './components';

// constants
import { CREW_MEMBERS } from './crewInfo';

// styles
import styles from './Crew.module.css';

export function Crew() {
  const [activeMember, setActiveMember] = useState(CREW_MEMBERS.mark);

  const { name, image, role, description } = activeMember;

  return (
    <div className={styles.crew}> 
      <div className={styles.information}>
        <div className={styles.introduction}>
          <Introduction />
        </div>
        <div className={styles.image}>
          <Image src={image.src} alt={image.alt} />
        </div>
        <div className={styles.slider}>
          <SliderMenu onClick={setActiveMember} activeMember={activeMember} />
        </div>
        <div className={styles.text}>
          <Information role={role} name={name} description={description} />
        </div>
      </div>
    </div>
  );
}
