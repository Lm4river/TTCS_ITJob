import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './AppliedJobs.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import JobItem from '~/components/JobItem';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function AppliedJobs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobList, currentUser } = useReduxSelector();

  useEffect(() => {
    // get rid of styling for selected job on this page
    dispatch(jobsSlice.actions.selectJob({}));
  }, []);

  if (!currentUser) {
    navigate(config.routes.home);
  } else {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          {currentUser.appliedJobs?.length > 0 ? (
            <div className={cx('content')}>
              <h1 className={cx('title')}>Bạn có {currentUser.appliedJobs.length} Việc làm ứng tuyển</h1>
              {currentUser.appliedJobs.map((jobID, index) => (
                <JobItem key={index} data={jobList.find((job) => job.id === jobID)} />
              ))}
            </div>
          ) : (
            <>
              <h1 className={cx('title')}>Bạn có 0 việc làm ứng tuyển</h1>
              <h3 className={cx('subtitle')}>Bạn chưa ứng tuyển công việc nào!</h3>
              <Image className={cx('applied-jobs_img')} src={images.none_jobs_applied} alt="apply-now_img" />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default AppliedJobs;
