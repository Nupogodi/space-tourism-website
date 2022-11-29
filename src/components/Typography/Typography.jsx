import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// styles
import styles from './Typography.module.css';

const cx = classNames.bind(styles);

export const Typography = ({
  children,
  tag = 'h2',
  color = 'light',
  centered = false,
  font = 'primary',
  bold = false,
  uppercase = false,
  preset = 'text',
  // className,
}) => {
  const Component = tag;

  const className = cx({
    [preset]: preset,
    [color]: color,
    [centered]: centered,
    [font]: font,
    uppercase,
    centered,
    bold,
    typography: true,
  });

  return <Component className={className}>{children}</Component>;
};

Typography.propTypes = {
  tag: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  centered: PropTypes.bool,
  font: PropTypes.string,
  uppercase: PropTypes.bool,
  preset: PropTypes.string,
};

Typography.defaultProps = {
  tag: 'h2',
  bold: false,
  font: 'primary',
  color: 'light',
  centered: false,
  uppercase: false,
  preset: 'heading2',
};
