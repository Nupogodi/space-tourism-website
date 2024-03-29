import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// constants
import { ROUTES } from "utils/constants";

// hooks
import { useMatchMedia } from "hooks/";

// components
import {
  Logo,
  Close,
  Hamburger,
  Button,
  DesktopView,
  MobileView,
  OutsideClickDetector,
} from "components";

// styles
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location]);

  const [isTablet, isDesktop] = useMatchMedia([
    "(min-width: 768px)",
    "(min-width: 1300px)",
  ]);

  /* eslint-disable-next-line */
  const toggleMobileDrawer = function () {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav aria-labelledby='site-navigation' className={styles.nav}>
      <NavLink to={ROUTES.home.url}>
        <Logo className={styles.logo} />
      </NavLink>
      <div className={styles.divider} />
      {isTablet ? (
        <DesktopView isDesktop={isDesktop} />
      ) : (
        <div>
          <div className={styles.toggleBtn}>
            {/* eslint-disable-next-line */}
            <Button styled='wrapper' onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <Close /> : <Hamburger />}
            </Button>
          </div>
          <OutsideClickDetector
            outsideClickAction={() => setMobileDrawerOpen(false)}
          >
            <MobileView mobileDrawerOpen={mobileDrawerOpen} />
          </OutsideClickDetector>
        </div>
      )}
    </nav>
  );
};
