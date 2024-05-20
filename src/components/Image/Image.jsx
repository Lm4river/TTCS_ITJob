import { forwardRef, memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import images from '~/assess/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFallback);
  };
  return (
    <img
      {...props}
      className={cx('wrapper', className)}
      src={fallback || src}
      alt={alt}
      ref={ref}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default memo(Image);
