import classNames from 'classnames/bind';

import styles from './Employer.module.scss';

const cx = classNames.bind(styles);

function Employer() {
  return (
    <div className={cx('wrapper')}>
      <h1>Trang nhà tuyển dụng</h1>
      <p>Đang được phát triển...</p>
    </div>
  );
}

export default Employer;
