import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx('wrapper')}>
      <h1>Trang Blog</h1>
      <p>Chưa được phát triển...</p>
    </div>
  );
}

export default Blog;
