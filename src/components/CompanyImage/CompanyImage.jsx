import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CompanyImage.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function CompanyImage({ className, to, src, alt }) {
  let Wrap = 'div';
  if (to) {
    Wrap = Link;
  }

  return (
    <Wrap to={to} className={cx('wrapper', className)}>
      <Image src={src} alt={alt} />
    </Wrap>
  );
}

CompanyImage.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default memo(CompanyImage);
