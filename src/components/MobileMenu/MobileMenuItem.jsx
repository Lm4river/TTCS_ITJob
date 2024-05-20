import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

function MobileMenuItem({ className, children, to, leftIcon, nextIcon, onClick }) {
  let Wrap = 'div';
  if (to) {
    Wrap = Link;
  }

  return (
    <Wrap to={to} className={cx('menu-item', className)} onClick={onClick}>
      {!!leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      {children}
      {!!nextIcon && (
        <span className={cx('next-icon')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </Wrap>
  );
}

MobileMenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
  leftIcon: PropTypes.node,
  nextIcon: PropTypes.bool,
};

export default memo(MobileMenuItem);
