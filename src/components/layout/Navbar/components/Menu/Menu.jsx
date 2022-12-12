import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// components
import { NavItem } from 'components';

// constants
import { ROUTES } from 'utils/constants';

// styles
import styles from './Menu.module.css';

const cx = classNames.bind(styles);

export function Menu({
  view = 'mobile',
  showCounter = false,
  paddedItems = false,
  hoverOn = false,
}) {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const menuClasses = cx({
    mobileView: view === 'mobile',
    desktopView: view === 'desktop',
    menu: true,
  });

  return (
    <ol className={menuClasses}>
      {Object.values(ROUTES).map((value) => {
        const itemClasses = cx({
          item: true,
          hoverOn,
          counter: showCounter,
          active: currentPath === value.url && view !== 'mobile',
        });

        return (
          <li key={value.url} className={itemClasses}>
            <NavLink key={value.url} to={value.url}>
              <NavItem
                url={value.url}
                title={value.title}
                padded={paddedItems}
              />
            </NavLink>
          </li>
        );
      })}
    </ol>
  );
}

Menu.propTypes = {
  view: PropTypes.oneOf(['mobile', 'desktop']).isRequired,
  showCounter: PropTypes.bool,
  paddedItems: PropTypes.bool,
  hoverOn: PropTypes.bool,
};

Menu.defaultProps = {
  showCounter: false,
  paddedItems: false,
  hoverOn: false,
};
