import classNames from 'classnames/bind';

import styles from './BestCompanies.module.scss';

const cx = classNames.bind(styles);

function BestCompanies() {
  return (
    <div className={cx('wrapper')}>
      <h1>Trang Công ty tốt nhất</h1>
      <p>Chưa được phát triển...</p>
    </div>
  );
}

export default BestCompanies;
