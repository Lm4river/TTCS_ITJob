import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRightFromBracket,
  faBars,
  faCheckToSlot,
  faChevronRight,
  faCircleUser,
  faHeart,
  faRobot,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './MobileHeader.module.scss';
import config from '~/config';
import { HEADER_MOBILE_MENU, CITIES } from '~/assess/constants';
import MobileMenu, { MobileMenuItem } from '~/components/MobileMenu';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice, usersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function MobileHeader() {
  const userLinks = [
    {
      leftIcon: <FontAwesomeIcon icon={faUser} />,
      title: 'Tài khoản của tôi',
      to: config.routes.profile,
    },
    {
      leftIcon: <FontAwesomeIcon icon={faRobot} />,
      title: 'Robot công việc của tôi',
      to: config.routes.myJobRobot,
    },
    {
      leftIcon: <FontAwesomeIcon icon={faHeart} />,
      title: 'Việc làm đã lưu',
      to: config.routes.savedJobs,
    },
    {
      leftIcon: <FontAwesomeIcon icon={faCheckToSlot} />,
      title: 'Việc làm đã ứng tuyển',
      to: config.routes.appliedJobs,
    },
    {
      leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Đăng xuất',
      onClick: async () => {
        dispatch(usersSlice.actions.signOut());
        await navigate(config.routes.home);
        window.location.reload(false);
      },
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, companyList } = useReduxSelector();
  const [overlayMenu, setOverlayMenu] = useState(false);
  const [history, setHistory] = useState([{ data: HEADER_MOBILE_MENU }]);

  const currentMenu = history[history.length - 1];

  const handleSearchJobs = (item) => {
    setOverlayMenu(false);

    // jobs by companies
    if (companyList.some((company) => company.name === item)) {
      const currCompany = companyList.find((company) => company.name === item);

      navigate(
        config.routes.companyProfile.replace(
          ':companyname',
          currCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
            currCompany.id.replace('_', '-').toLowerCase(),
        ),
      );

      currCompany.id !== window.location.pathname.slice(-7).replace('-', '_') && window.location.reload(false);

      // jobs by cities
    } else if (CITIES.some((city) => city === item)) {
      dispatch(filtersSlice.actions.locationFilterChange(item));
      navigate(config.routes.jobs);

      // search jobs by text
    } else {
      dispatch(filtersSlice.actions.searchFilterChange(item));
      navigate(config.routes.jobs);
    }
  };

  const handleReload = () => {
    dispatch(filtersSlice.actions.searchFilterChange(''));
    dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));
    window.location.pathname === config.routes.jobs && window.location.reload(false);
  };

  const handleSetOverlayMenu = useCallback(setOverlayMenu, []);

  return (
    <div className={cx('mobile-menu')}>
      <button className={cx('hambuger-btn', { hidden: overlayMenu })} onClick={() => setOverlayMenu(true)}>
        <FontAwesomeIcon className={cx('hambuger-icon')} icon={faBars} />
      </button>

      <MobileMenu active={overlayMenu} setActive={handleSetOverlayMenu}>
        <div className={cx('mobile-menu_container')}>
          {!currentMenu.title &&
            (currentUser ? (
              <div className={cx('user-account')}>
                <span className={cx('avatar_img')}>{currentUser.fullname.slice(0, 1)}</span>
                <span>{currentUser.fullname}</span>
                <span
                  className={cx('next-icon')}
                  onClick={() => setHistory((prev) => [...prev, { title: currentUser.fullname, data: userLinks }])}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </div>
            ) : (
              <Link className={cx('user-account')} to={config.routes.signIn}>
                <span className={cx('left-icon', 'sign-in')}>
                  <FontAwesomeIcon icon={faCircleUser} />
                </span>
                <span>Đăng nhập</span>
              </Link>
            ))}

          {/* menu header */}
          {!!currentMenu.title && (
            <div className={cx('menu-header')}>
              <span className={cx('left-icon')} onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span>{currentMenu.title}</span>
            </div>
          )}

          {/* menu data */}
          {currentMenu.data.map((item, index) =>
            !!item.title ? (
              <MobileMenuItem
                key={index}
                to={item.to}
                leftIcon={item.leftIcon}
                nextIcon={!!item.data}
                onClick={
                  !!item.data
                    ? () => setHistory((prev) => [...prev, item])
                    : item.title === 'All Jobs'
                    ? handleReload
                    : item.onClick
                }
              >
                {item.title}
              </MobileMenuItem>
            ) : (
              <div key={index} className={cx('menu-subitem')} onClick={() => handleSearchJobs(item)}>
                {item}
              </div>
            ),
          )}
        </div>
      </MobileMenu>
    </div>
  );
}

MobileHeader.propTypes = {
  children: PropTypes.node,
};

export default MobileHeader;
