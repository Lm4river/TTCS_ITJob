import { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

const NavItem = forwardRef(({ children, multilevel = false, to, className, ...passProps }, ref) => {
  let Wrap = 'div';

  if (to) {
    Wrap = Link;
  }

  return (
    <Wrap className={cx('nav-link', className, { pointer: !!to })} to={to} ref={ref} {...passProps}>
      <span className={cx('content', { multilevel })}>{children}</span>
    </Wrap>
  );
});

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  multilevel: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default memo(NavItem);
