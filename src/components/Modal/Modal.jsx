import { memo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Modal.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Modal({ children, title, message, btn, action, active, setActive, hiddenClose = false }) {
  return (
    <div className={cx('wrapper', { active: active })}>
      <div className={cx('container')}>
        {!hiddenClose && (
          <button className={cx('close-btn')} onClick={() => setActive(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
        <h3 className={cx('title')}>{title}</h3>
        {!!message && <span className={cx('message')}>{message}</span>}
        {!!children && <div className={cx('content')}>{children}</div>}
        {!!btn && (
          <Button className={cx('action-btn')} primary lg onClick={action}>
            {btn}
          </Button>
        )}
      </div>

      <div className={cx('overlay')} onClick={() => setActive(false)}></div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  btn: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  hiddenClose: PropTypes.bool,
};

export default memo(Modal);
