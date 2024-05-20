import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('links')}>
          <div className={cx('links-about')}>
            <h4 className={cx('title')}>Về ITJob</h4>
            <div className={cx('items')}>
              <Link className={cx('item')} to={config.routes.home}>
                Trang chủ
              </Link>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'about-us') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'about-us')}>
                  Về ITJob.com
                </Link>
              </div>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'contact-us') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'contact-us')}>
                  Liên hệ
                </Link>
              </div>
              <Link className={cx('item')} to={config.routes.jobs}>
                Tất cả việc làm
              </Link>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'faq') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'faq')}>
                Câu hỏi thường gặp
                </Link>
              </div>
            </div>
          </div>

          <div className={cx('links-terms')}>
            <h4 className={cx('title')}>Điều khoản chung</h4>
            <div className={cx('items')}>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'privacy-policy') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'privacy-policy')}>
                Chính sách bảo mật
                </Link>
              </div>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'operating-regulation') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'operating-regulation')}>
                Quy chế hoạt động
                </Link>
              </div>
              <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'complaint-handling') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'complaint-handling')}>
                Xử lý khiếu nại
                </Link>
              </div>
              {/* <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'term-and-conditions') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'term-and-conditions')}>
                  Terms & Conditions
                </Link>
              </div> */}
              {/* <div
                onClick={() => {
                  window.location.pathname === config.routes.pending.replace(':pathname', 'press') &&
                    window.location.reload(false);
                }}
              >
                <Link className={cx('item')} to={config.routes.pending.replace(':pathname', 'press')}>
                  Press
                </Link>
              </div> */}
            </div>
          </div>

          <div className={cx('links-copy-right')}>
            <span className={cx('item')}>Mã số thuế: 0123456789</span>
            <div className={cx('icons')}>
              <a href="https://www.facebook.com/">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a href="https://www.linkedin.com/">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href="https://www.youtube.com/">
                <i>
                  <FontAwesomeIcon icon={faYoutube} />
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className={cx('info')}>
          <h4 className={cx('title')}>Liên hệ để đăng tin tuyển dụng tại:</h4>
          <span className={cx('item')}>
            Ho Chi Minh: (+84) 123 456 789 - Ha Noi: (+84) 123 456 789 - Email: nxq@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
