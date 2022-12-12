import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

// constants
import { ROUTES } from 'utils/constants';

// components
import { Navbar } from 'components';

// styles
import 'assets/styles/main.css';
import styles from './App.module.css';

const cx = classNames.bind(styles);

const App = () => {
  const location = useLocation().pathname;

  const className = cx({
    home: location === ROUTES.home.url,
    destination: location === ROUTES.destination.url,
    App: true,
  });

  return (
    <div className={className}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={` ${styles.main}`}>
        <div className='container paddedInline fullHeight'>
          <Routes>
            {Object.values(ROUTES).map((value) => (
              <Route key={value.url} path={value.url} element={value.element} />
            ))}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
