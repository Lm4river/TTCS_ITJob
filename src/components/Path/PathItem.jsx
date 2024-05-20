import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Path.module.scss';

const cx = classNames.bind(styles);

function Path({ children }) {
  let Wrap = 'button';
  if (children.to) {
    Wrap = Link;
  }

  return (
    <Wrap
      className={cx('path-item')}
      to={children.to}
      onClick={() => {
        !children.to && window.location.reload(false);
      }}
    >
      {children.title}
    </Wrap>
  );
}

Path.propTypes = {
  children: PropTypes.object.isRequired,
};

export default memo(Path);
