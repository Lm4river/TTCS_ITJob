import { useCallback, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';//điều hướng chương trình
import { useDispatch } from 'react-redux';//gửi các action đến Redux store
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import styles from './JobItem.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '../Button';
import config from '~/config';
import CharacteristicItem from '~/components/CharacteristicItem';
import { filtersSlice } from '~/redux/slices';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function JobItem({ data = {}, selectJob = () => {} }) {
  const dispatch = useDispatch();
  const { selectedJob, companyList } = useReduxSelector();
  const navigate = useNavigate();
//tính ngày , giờ , phút của bài đăng
  const jobPostedDay = Math.floor(data.postedTime / 1000 / 60 / 60 / 24);
  const jobPostedHour = Math.floor((data.postedTime / 1000 / 60 / 60) % 24);
  const jobPostedMinute = Math.ceil((data.postedTime / 1000 / 60) % 60);
  const timeUnit = jobPostedDay > 0 ? 'd' : jobPostedHour > 0 ? 'h' : 'm';

  const handleSearchJobs = useCallback((skill) => {
    // reset searchTextError
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    // set giá trị searchText & location
    dispatch(filtersSlice.actions.searchFilterChange(skill));
    dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));

    // điều hướng tới trang việc làm với đường dẫn được cấu hình trong config
    dispatch(filtersSlice.actions.resetFilters());
    navigate(config.routes.jobs);
  }, []);//dependency array của useCallback,handleSearchJobs sẽ được ghi nhớ và không thay đổi giữa các lần render trừ khi có sự thay đổi trong các dependencies

  if (data && selectedJob) {
    return (
      <div
        className={cx('wrapper', { special: !!data.highlightBenefits, selected: selectedJob.id === data.id })}
        onClick={() => selectJob(data)}//thêm class với điều kiện
      >
        <CompanyImage
          className={cx('logo-image')}
          to={config.routes.companyProfile.replace(
            ':companyname',
            companyList.length > 0 &&
              companyList
                .find((company) => company.id === data.companyId)
                .name.replace(/[^a-zA-Z1-10000]/g, '-')//hay thế các ký tự không phải chữ cái và số trong tên công ty bằng dấu gạch ngang và chuyển thành chữ thường
                .toLowerCase() + data.companyId.replace('_', '-').toLowerCase(),
          )}
          src={data.logo}
          alt="company_img"
        />

        <div className={cx('main-content')}>
          <div className={cx('info')}>
            <Link
              to={config.routes.job.replace(
                ':jobname',
                data.title.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() + data.id.replace('_', '-').toLowerCase(),
              )}
              className={cx('job-title')}
            >
              {data.title}
            </Link>

            <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
              {data.salaryMin && typeof data.salaryMin === 'number'
                ? `${data.salaryMin.toLocaleString('en-US')} - ${data.salaryMax.toLocaleString('en-US')} USD`//Hiển thị thông tin về mức lương của công việc
                : data.salaryMin && typeof data.salaryMin === 'string'
                ? data.salaryMin
                : `Up to ${data.salaryMax.toLocaleString('en-US')} USD`}//không có salarymin thì upto
            </CharacteristicItem>

            {data.highlightBenefits && (
              <ul className={cx('benefits')}>
                {data.highlightBenefits.map((benefit, index) => (
                  <li key={index} className={cx('benefit-item')}>
                    {benefit}
                  </li>
                ))}
              </ul>
            )}

            <div className={cx('skills')}>
              {data.skills.map((skill, index) => (
                <Button
                  className={cx({ active: selectedJob.id === data.id })}
                  key={index}
                  basic
                  onClick={() => handleSearchJobs(skill)}
                >
                  {skill}
                </Button>
              ))}
            </div>
          </div>

          <div className={cx('hight-light')}>
            {data.hotJob ? <span className={cx('hot-tag')}>Hot</span> : ''}
            {!data.seen ? <span className={cx('new-tag')}>New</span> : ''}
            <span>{data.location}</span>
            <span className={cx({ newPost: !jobPostedDay })}>
              {jobPostedDay > 0
                ? `${jobPostedDay} ${timeUnit}`
                : jobPostedHour > 0
                ? `${jobPostedHour} ${timeUnit}`
                : `${jobPostedMinute} ${timeUnit}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

JobItem.propTypes = {
  data: PropTypes.object.isRequired,
  selectJob: PropTypes.func,
};

export default memo(JobItem);
