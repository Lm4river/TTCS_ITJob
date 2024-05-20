import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

function MobileMenu({ className, children, light, active, setActive }) {
  useEffect(() => {
    setActive(false);
  }, [window.location.pathname]);

  return (
    <div className={cx('wrapper', className, { active: active })}>
      <div className={cx('container', { light: light })}>
        <button className={cx('close-btn')} onClick={() => setActive(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {!!children && children}
      </div>

      <div className={cx('overlay')} onClick={() => setActive(false)}></div>
    </div>
  );
}

MobileMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  white: PropTypes.bool,
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default memo(MobileMenu);
