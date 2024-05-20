import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobSearchLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const cx = classNames.bind(styles);

function JobSearchLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header search />
      <div>{children}</div>
      <Footer />

      <ScrollToTop />
    </div>
  );
}

JobSearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(JobSearchLayout);
