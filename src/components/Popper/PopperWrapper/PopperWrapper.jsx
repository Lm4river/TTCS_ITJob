import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PopperWrapper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className, fixed = false, stretch = false }) {
  return <div className={cx('wrapper', className, { fixed, stretch })}>{children}</div>;
}

PopperWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  stretch: PropTypes.bool,
};

export default memo(PopperWrapper);
