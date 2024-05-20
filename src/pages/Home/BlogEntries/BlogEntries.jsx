import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './BlogEntries.module.scss';
import config from '~/config';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

// will replace by calling api
const blog = {
  title: 'Thiết kế game là gì? Công việc của Game Designer là gì?',
  hightlight:
    'Thiết kế Game là làm gì? Game Designer là ai? Thiết kế game không phải là công việc liên quan đến thiết kế đồ họa như mọi người vẫn nhầm, mà là tạo ra những câu chuyện, nhân vật, mục tiêu… trong trò chơi.',
  picture:
    'https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeE5tS0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--78bc60cf531ced001a6b98760371724c87723776/thiet-ke-game-la-gi-game-designer-thumbnail-300x158.jpg',
  link: '#',
};
const newestBlogs = [blog, blog];

function BlogEntries() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1 className={cx('title')}>Blog mới nhất</h1>

        <Link className={cx('view-all')} to={config.routes.blog}>
          <>
            <span>Xem tất cả</span>
            <span>
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </>
        </Link>
      </div>

      <div className={cx('content')}>
        {newestBlogs.map((blog, index) => (
          <div key={index} className={cx('blog')}>
            <Link to={config.routes.blog} className={cx('blog-picture')}>
              <Image src={blog.picture} />
            </Link>

            <div className={cx('blog-info')}>
              <div>
                <Link to={config.routes.blog} className={cx('blog-title')}>
                  <h4>{blog.title}</h4>
                </Link>
                <span className={cx('blog-subtitle')}>{blog.hightlight}</span>
              </div>

              <Link to={config.routes.blog} className={cx('read-more')}>
                <span>Đọc thêm</span>
                <span>
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogEntries;
