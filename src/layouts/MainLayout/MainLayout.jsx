import { memo } from 'react';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />

      <ScrollToTop />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(MainLayout);
