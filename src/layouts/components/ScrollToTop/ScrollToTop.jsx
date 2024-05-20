import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ScrollToTop.module.scss';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.screen.availHeight * 0.8) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={cx('wrapper', { active: showScrollToTop })} onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faCircleUp} />
    </div>
  );
}

export default ScrollToTop;
