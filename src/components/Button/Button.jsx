import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({
  children,
  centered,
  bgColor,
  onClick,
  type = 'button',
  styled = 'button',
  className,
}) => {
  const classNameList = cx({
    btn: styled === 'button',
    wrapper: styled === 'wrapper',
    [bgColor]: true,
    centered,
    className,
  });

  return (
    <button className={classNameList} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  centered: PropTypes.bool,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  styled: PropTypes.string,
};

Button.defaultProps = {
  centered: false,
  type: 'button',
  styled: 'button',
  bgColor: 'light',
};
