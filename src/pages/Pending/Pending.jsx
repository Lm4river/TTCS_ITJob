import classNames from 'classnames/bind';

import styles from './Pending.module.scss';

const cx = classNames.bind(styles);

function Pending() {
  return (
    <div className={cx('wrapper')}>
      <h1>Xin lỗi! Trang {window.location.pathname.slice(10, window.location.pathname.length)}</h1>
      <p>Chưa phát triển...</p>
    </div>
  );
}

export default Pending;
