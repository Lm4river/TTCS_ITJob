import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './HeadSearch.module.scss';
import Search from '~/layouts/components/Header/components/Search';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function HeadSearch() {
  const dispatch = useDispatch();
  const { jobList, currentUser } = useReduxSelector();
  const [location, setLocation] = useState('Tất cả thành phố');
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      currentUser.location && setLocation(currentUser.location);
      currentUser.skills?.length > 0 && setSkills(currentUser.skills);
    } else {
      setSkills(['Tester', 'Java', 'PHP', 'Android', '.NET', 'iOS', 'Business Analyst', 'ReactJS']);
    }
  }, [currentUser]);

  const handleSearchText = (skill) => {
    // reset searchTextError
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    // set searchText & location
    dispatch(filtersSlice.actions.searchFilterChange(skill));
    dispatch(filtersSlice.actions.locationFilterChange(location));

    // navigate to job page
    navigate(config.routes.jobs);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h1 className={cx('title')}>
          {currentUser
            ? `${jobList.length} Việc làm IT dành cho ${currentUser.fullname}`
            : `${jobList.length} Việc làm IT dành cho Developers`}
        </h1>
        <div className={cx('search-form')}>
          <Search className={cx('head-search')} big />
        </div>
        <div className={cx('search-skills')}>
          {skills.map((skill, index) => (
            <button key={index} className={cx('skill')} onClick={() => handleSearchText(skill)}>
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadSearch;
