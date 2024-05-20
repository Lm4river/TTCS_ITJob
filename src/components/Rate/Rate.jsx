import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import styles from './Rate.module.scss';

const cx = classNames.bind(styles);

function Rate({ score, small = false, big = false, background = false }) {
  if (background) {
    return (
      <div className={cx('wrapper')}>
        <i className={cx('star', { small: small, big: big, fullbg: score > 1, halfbg: score > 0 && score < 1 })}>
          <FontAwesomeIcon icon={faStar} />
        </i>
        <i className={cx('star', { small: small, big: big, fullbg: score > 2, halfbg: score > 1 && score < 2 })}>
          <FontAwesomeIcon icon={faStar} />
        </i>
        <i className={cx('star', { small: small, big: big, fullbg: score > 3, halfbg: score > 2 && score < 3 })}>
          <FontAwesomeIcon icon={faStar} />
        </i>
        <i className={cx('star', { small: small, big: big, fullbg: score > 4, halfbg: score > 3 && score < 4 })}>
          <FontAwesomeIcon icon={faStar} />
        </i>
        <i className={cx('star', { small: small, big: big, fullbg: score === 5, halfbg: score > 4 && score < 5 })}>
          <FontAwesomeIcon icon={faStar} />
        </i>
      </div>
    );
  } else {
    return (
      <div className={cx('wrapper')}>
        <i className={cx('star-nonbg', { small: small, big: big, color: score > 0 })}>
          {score > 0 && score < 1 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : <FontAwesomeIcon icon={faStar} />}
        </i>
        <i className={cx('star-nonbg', { small: small, big: big, color: score > 1 })}>
          {score > 1 && score < 2 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : <FontAwesomeIcon icon={faStar} />}
        </i>
        <i className={cx('star-nonbg', { small: small, big: big, color: score > 2 })}>
          {score > 2 && score < 3 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : <FontAwesomeIcon icon={faStar} />}
        </i>
        <i className={cx('star-nonbg', { small: small, big: big, color: score > 3 })}>
          {score > 3 && score < 4 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : <FontAwesomeIcon icon={faStar} />}
        </i>
        <i className={cx('star-nonbg', { small: small, big: big, color: score > 4 })}>
          {score > 4 && score < 5 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : <FontAwesomeIcon icon={faStar} />}
        </i>
      </div>
    );
  }
}

Rate.propTypes = {
  score: PropTypes.number.isRequired,
  small: PropTypes.bool,
  big: PropTypes.bool,
  background: PropTypes.bool,
};

export default memo(Rate);
