import { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './JobResult.module.scss';
import JobList from './JobList';
import CompanyOverview from './CompanyOverview';
import JobHeader from './JobDetail/JobHeader';
import JobOverview from './JobDetail/JobOverview';
import JobContent from './JobDetail/JobContent';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function JobResult({ jobList }) {
  const { selectedJob, selectedCompany } = useReduxSelector();
  const [activeOverlay, setActiveOverlay] = useState(false);

  useEffect(() => {
    setActiveOverlay(true);
  }, [selectedJob]);

  useEffect(() => {
    setActiveOverlay(false);
  }, [jobList]);

  return (
    <div className={cx('wrapper')}>
      <JobList jobList={jobList} />

      <div className={cx('detail')}>
        <div className={cx('job')}>
          <JobHeader job={selectedJob} company={selectedCompany} />
          <JobOverview job={selectedJob} />
          <JobContent job={selectedJob} />
        </div>
        <div className={cx('company')}>
          <CompanyOverview company={selectedCompany} />
        </div>
      </div>

      {/* job modal on mobile */}
      {!!selectedJob && !!selectedCompany && (
        <div className={cx('detail-mobile', { active: activeOverlay })}>
          <div className={cx('container')}>
            <button className={cx('close-btn')} onClick={() => setActiveOverlay(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <JobHeader className={cx('job-header')} job={selectedJob} company={selectedCompany} />
            <JobOverview job={selectedJob} />
            <JobContent job={selectedJob} />
            <CompanyOverview company={selectedCompany} />
          </div>

          <div className={cx('overlay')} onClick={() => setActiveOverlay(false)}></div>
        </div>
      )}
    </div>
  );
}

JobResult.propTypes = {
  jobList: PropTypes.array.isRequired,
};

export default memo(JobResult);
