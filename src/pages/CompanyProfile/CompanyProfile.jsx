import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Flag from 'react-world-flags';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCalendarDays,
  faCheck,
  faClock,
  faFlag,
  faGear,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import styles from './CompanyProfile.module.scss';
import CharacteristicItem from '~/components/CharacteristicItem';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Path from '~/components/Path';
import config from '~/config';
import Jobs from './Jobs';
import Review from './Review';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice, usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function CompanyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { companyList, headerShrink, currentUser } = useReduxSelector();

  const [currentCompany, setCurrentCompany] = useState({});
  const [type, setType] = useState('job');

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // get rid of styling for selected job on this page
    dispatch(jobsSlice.actions.selectJob({}));
  }, []);

  // set current company
  useEffect(() => {
    const companyId = window.location.pathname.slice(-7).replace('-', '_');
    const currCompany = companyList.find((company) => company.id.toLowerCase() === companyId);
    setCurrentCompany(currCompany);
  }, [companyList]);

  const handleUpdateFollowedCompany = (newList) => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'followedCompany',
        payload: newList,
      }),
    );
  };

  const handleFollowCompany = () => {
    if ((currentUser && currentUser?.followedCompany?.length < 5) || (currentUser && !currentUser.followedCompany)) {
      const newList = currentUser.followedCompany
        ? [...currentUser.followedCompany, currentCompany.id]
        : [currentCompany.id];
      handleUpdateFollowedCompany(newList);
    } else if (currentUser && currentUser?.followedCompany?.length === 5) {
      alert('Opps! You can only follow maximum 5 companies');
    } else {
      navigate(config.routes.signIn);
    }
  };

  const handleUnfollowCompany = useCallback(() => {
    const newList = currentUser.followedCompany.filter((id) => id !== currentCompany.id);
    handleUpdateFollowedCompany(newList);
  }, []);

  const handleDelay = useCallback(() => alert('Xin lỗi! Chức năng chưa được phát triển.'), []);

  const handleSetType = useCallback(setType, []);

  if (currentCompany) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('container', { shrink: headerShrink })}>
          {/* header */}
          {currentCompany.id && (
            <header className={cx('header')}>
              <div className={cx('logo')}>
                <Image src={currentCompany.logo} />
              </div>

              <div className={cx('info')}>
                <h1 className={cx('title')}>{currentCompany.name}</h1>
                <div className={cx('characteristics')}>
                  <CharacteristicItem className={cx('location')} icon={<FontAwesomeIcon icon={faLocationDot} />}>
                    {typeof currentCompany.district === 'number'
                      ? `Quận ${currentCompany.district}, ${currentCompany.province}`
                      : `${currentCompany.district}, ${currentCompany.province}`}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>
                    {currentCompany.type}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
                    {currentCompany.size}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                    {currentCompany.workingDays}
                  </CharacteristicItem>
                  <CharacteristicItem
                    icon={<Flag code={currentCompany.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
                  >
                    {currentCompany.country}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>
                    {!currentCompany.overtime ? 'No OT' : currentCompany.overtime}
                  </CharacteristicItem>
                </div>
              </div>

              <div className={cx('actions')}>
                <Button className={cx('actions-btn')} primary xl onClick={handleDelay}>
                  Viết đánh giá
                </Button>
                {currentUser && currentUser.followedCompany?.includes(currentCompany.id) ? (
                  <Button className={cx('actions-btn')} outline xl onClick={handleUnfollowCompany}>
                    <>
                      <i>
                        <FontAwesomeIcon icon={faCheck} />
                      </i>
                      <span>Đang theo dõi</span>
                    </>
                  </Button>
                ) : (
                  <Button className={cx('actions-btn')} outline xl onClick={handleFollowCompany}>
                    Theo dõi
                  </Button>
                )}
              </div>
            </header>
          )}

          {/* navigation bar */}
          <ul className={cx('navigation')}>
            <li className={cx('tab', { active: type === 'job' })} onClick={() => setType('job')}>
              Việc làm
            </li>
            <li className={cx('tab', { active: type === 'review' })} onClick={() => setType('review')}>
              {`${currentCompany.review ? currentCompany.review?.length : ''} ${
                currentCompany.review?.length > 0 ? 'Đánh giá' : 'Đánh giá'
              }`}
            </li>
            <li className={cx('website')}>
              <a href={currentCompany.website} target="_blank">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </a>
            </li>
          </ul>

          {/* company detail info */}
          <div className={cx('content')}>
            {type === 'job' ? (
              <Jobs currentCompany={currentCompany} setType={handleSetType} />
            ) : type === 'review' ? (
              <Review currentCompany={currentCompany} />
            ) : (
              ''
            )}
          </div>

          <Path items={[{ title: 'Trang chủ', to: config.routes.home }, { title: currentCompany.name }]} />
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
