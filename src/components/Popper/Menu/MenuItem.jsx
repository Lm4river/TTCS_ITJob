import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ children, leftIcon, nextIcon, onMouseEnter, to, onClick }) {
  let Wrap = 'div';

  if (to) {
    Wrap = Link;
  }

  return (
    <Wrap
      className={cx('menu-item', { pointer: !!to || !!onClick })}
      to={to}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <div className={cx('item-content')}>
        {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
        {children}
      </div>
      {nextIcon && (
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </Wrap>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.object,
  nextIcon: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  to: PropTypes.string,
};

export default memo(MenuItem);
