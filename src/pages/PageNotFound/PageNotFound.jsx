import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './PageNotFound.module.scss';
import config from '~/config';
import Search from '~/layouts/components/Header/components/Search';
import Image from '~/components/Image';
import images from '~/assess/images';

const cx = classNames.bind(styles);

function PageNotFound() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('image')}>
          <Image src={images.success} />
        </div>
        <div className={cx('content')}>
          <h1 className={cx('title')}>Ôi!</h1>
          <h2 className={cx('sub-title')}>Trang này đã tìm được việc làm tốt hơn.</h2>
          <div className={cx('message')}>
            <p>Rất tiếc, trang bạn đang tìm kiếm không tồn tại.</p>
            <p>Hãy tìm công việc tốt hơn cho riêng bạn ngay hôm nay!</p>
          </div>

          <Search className={cx('search')} />

          <p className={cx('message')}>
            <span>Hoặc quay trở lại </span>
            <Link className={cx('hightlight')} to={config.routes.home}>
              Trang chủ
            </Link>
            <span> hoặc </span>
            <Link className={cx('hightlight')} to={config.routes.pending}>
              Liên hệ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
