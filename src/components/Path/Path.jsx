import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Path.module.scss';
import PathItem from './PathItem';

const cx = classNames.bind(styles);

function Path({ items = [] }) {
  return (
    <div className={cx('wrapper')}>
      {items.map((item, index) => (
        <PathItem key={index}>{item}</PathItem>   
      ))}
    </div>
  );
}

Path.propTypes = {
  items: PropTypes.array.isRequired,
};

export default memo(Path);
