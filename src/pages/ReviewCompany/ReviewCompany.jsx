import classNames from 'classnames/bind';

import styles from './ReviewCompany.module.scss';

const cx = classNames.bind(styles);

function ReviewCompany() {
  return (
    <div className={cx('wrapper')}>
      <h1>Trang Review Công ty</h1>
      <p>Chưa được phát triển...</p>
    </div>
  );
}

export default ReviewCompany;
