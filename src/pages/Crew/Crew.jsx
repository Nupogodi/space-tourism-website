import React, { useState } from "react";

// components
import { Introduction } from "pages";
import { Image, Information, SliderMenu } from "./components";

// constants
import { CREW_MEMBERS } from "./crewConstants";

// styles
import styles from "./Crew.module.css";

export const Crew = () => {
  const [activeMember, setActiveMember] = useState(CREW_MEMBERS.mark);

  const { name, image, role, description, id } = activeMember;

  return (
    <div className={`flexFlow ${styles.crew}`}>
      <section className={styles.information}>
        <div className={styles.introduction}>
          <Introduction text='Meet your crew' prefix='02' />
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
