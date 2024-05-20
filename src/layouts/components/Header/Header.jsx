import { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCheckToSlot,
  faHeart,
  faRobot,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assess/images';
import { JOBS, IT_COMPANIES } from '~/assess/constants';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import NavItem from './components/NavItem';
import Search from './components/Search';
import MobileHeader from './components/MobileHeader';
import { filtersSlice, headerSlice, usersSlice } from '~/redux/slices';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Header({ search = false }) {
  const dispatch = useDispatch();
  const { headerShrink, currentUser } = useReduxSelector();
  const navigate = useNavigate();

  const actionLinks = [
    { title: 'Nhà tuyển dụng', to: config.routes.employer },
    { title: 'Đăng nhập', to: config.routes.signIn },
  ];

  const userLinks = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Tài khoản của tôi',
      to: config.routes.profile,
    },
    {
      icon: <FontAwesomeIcon icon={faRobot} />,
      title: 'Robot Công việc của tôi',
      to: config.routes.myJobRobot,
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
      title: 'Việc làm đã lưu',
      to: config.routes.savedJobs,
    },
    {
      icon: <FontAwesomeIcon icon={faCheckToSlot} />,
      title: 'Việc làm ứng tuyển',
      to: config.routes.appliedJobs,
    },
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Đăng xuất',
      onClick: () => {
        dispatch(usersSlice.actions.signOut());
        navigate(config.routes.home);
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !search) {
        dispatch(headerSlice.actions.setHeaderShrink(true));
      } else {
        dispatch(headerSlice.actions.setHeaderShrink(false));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cx('wrapper', { shrink: headerShrink })}>
      <div className={cx('container')}>
        <div className={cx('logo', { shrink: headerShrink })}>
          <Link to={config.routes.home}>
            <img src={"https://i.imgur.com/gyizo98.png"} alt="logo_img" />
          </Link>
        </div>

        <div className={cx('navbar')}>
          <div className={cx('links')}>
            {/* Jobs  */}
            <Menu items={JOBS} search>
              <div
                onClick={() => {
                  dispatch(filtersSlice.actions.searchFilterChange(''));
                  dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));
                  window.location.reload(false);
                }}
              >
                <NavItem to={config.routes.jobs} multilevel>
                  Việc làm IT
                </NavItem>
              </div>
            </Menu>

            {/* IT Companies  */}
            <Menu items={IT_COMPANIES}>
              <NavItem multilevel>Công ty IT</NavItem>
            </Menu>

            {/* Blog  */}
            <NavItem to={config.routes.blog}>Blog</NavItem>

            {search && <Search />}
          </div>

          <div className={cx('actions')}>
            {currentUser ? (
              <Menu items={userLinks} smallItem>
                <NavItem>
                  <div className={cx('user', { showLess: search })}>
                    <div className={cx('user-name')}>
                      <span className={cx('user-name_text')}>{currentUser.fullname}</span>
                      <i className={cx('user-name_icon')}>
                        <FontAwesomeIcon icon={faSortDown} />
                      </i>
                    </div>
                    <div className={cx('avatar', { shrink: headerShrink })}>
                      {currentUser.avatar ? (
                        <Image src={currentUser.avatar} alt={`${currentUser.fullname}_avatar`} />
                      ) : (
                        currentUser.fullname.slice(0, 1)
                      )}
                    </div>
                  </div>
                </NavItem>
              </Menu>
            ) : (
              actionLinks.map((link, index) => (
                <NavItem key={index} to={link.to} multilevel={link.multilevel}>
                  {link.title}
                </NavItem>
              ))
            )}

            <div className={cx('language')}>
              <button className={cx('active')}>VI</button>
              <span className={cx('slash')}></span>
              <button onClick={() => alert('Xin lỗi! Chức năng này chưa được phát triển.')}>EN</button>
            </div>
          </div>
        </div>

        {/* menu on mobile and tablet */}
        <MobileHeader />
      </div>
    </nav>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

export default memo(Header);
