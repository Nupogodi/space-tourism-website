import React, { useState } from "react";

// components
import { Image, Information, Introduction, SliderMenu } from "./components";

// constants
import { CREW_MEMBERS } from "./crewConstants";

// styles
import styles from "./Crew.module.css";

export function Crew() {
  const [activeMember, setActiveMember] = useState(CREW_MEMBERS.mark);

  const { name, image, role, description, id } = activeMember;

  return (
    <div className={`flexFlow ${styles.crew}`}>
      <section className={styles.information}>
        <div className={styles.introduction}>
          <Introduction />
        </div>
        <div className={styles.image}>
          <Image src={image.src} alt={image.alt} />
        </div>
        <div className={styles.slider}>
          <SliderMenu onClick={setActiveMember} activeMemberID={id} />
        </div>
        <div className={styles.text}>
          <Information role={role} name={name} description={description} />
        </div>
      </section>
    </div>
  );
}
