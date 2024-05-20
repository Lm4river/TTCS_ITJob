import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faDollarSign, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';
import config from '~/config';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function JobOverview({ job = {} }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postedTime, id, skills, salaryMin, salaryMax, address, mapLink, type } = job;

  const jobPostedDay = Math.floor(postedTime / 1000 / 60 / 60 / 24);
  const dayUnit = jobPostedDay > 1 ? 'ngày' : 'ngày';
  const jobPostedHour = Math.floor((postedTime / 1000 / 60 / 60) % 24);
  const hourUnit = jobPostedHour > 1 ? 'giờ' : 'giờ';
  const jobPostedMinute = Math.ceil((postedTime / 1000 / 60) % 60);
  const minuteUnit = jobPostedMinute > 1 ? 'phút' : 'phút';

  const handleSearchJobs = useCallback((skill) => {
    // reset searchTextError
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    // set value for searchText & location
    dispatch(filtersSlice.actions.searchFilterChange(skill));
    dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));

    // navigate to job page and reset filters
    navigate(config.routes.jobs);
  }, []);

  if (id) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('skills')}>
          {skills?.map((skill, index) => (
            <Button key={index} basic md onClick={() => handleSearchJobs(skill)}>
              {skill}
            </Button>
          ))}
        </div>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {salaryMin && typeof salaryMin === 'number'
            ? `${salaryMin.toLocaleString('en-US')} - ${salaryMax.toLocaleString('en-US')} USD`
            : salaryMin && typeof salaryMin === 'string'
            ? salaryMin
            : `Up to ${salaryMax.toLocaleString('en-US')} USD`}
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faLocationDot} />}>
          <>
            <span>{address}</span>
            <a href={mapLink} className={cx('map-link')} target="_blank">
              Xem bản đồ
            </a>
          </>
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faDisplay} />}>{type}</CharacteristicItem>

        <CharacteristicItem className={cx({ newPost: !jobPostedDay })} icon={<FontAwesomeIcon icon={faCalendarDays} />}>
          {jobPostedDay > 0
            ? `${jobPostedDay} ${dayUnit} trước`
            : jobPostedHour > 0
            ? `${jobPostedHour} ${hourUnit} trước`
            : `${jobPostedMinute} ${minuteUnit} trước`}
        </CharacteristicItem>
      </div>
    );
  }
}

JobOverview.propTypes = {
  job: PropTypes.object,
};

export default memo(JobOverview);
