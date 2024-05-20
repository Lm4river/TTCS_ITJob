import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CharacteristicItem.module.scss';

const cx = classNames.bind(styles);

function CharacteristicItem({ children, className, icon }) {
  return (
    <div className={cx('wrapper', className)}>
      <span className={cx('icon')}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

CharacteristicItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default memo(CharacteristicItem);
