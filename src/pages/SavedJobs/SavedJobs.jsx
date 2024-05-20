import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './SavedJobs.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import JobItem from '~/components/JobItem';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function SavedJobs() {
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
          {currentUser.savedJobs?.length > 0 ? (
            <div className={cx('content')}>
              <h1 className={cx('title')}>Bạn có {currentUser.savedJobs.length} Việc làm đã lưu</h1>
              {currentUser.savedJobs.map((jobID, index) => (
                <JobItem key={index} data={jobList.find((job) => job.id === jobID)} />
              ))}
            </div>
          ) : (
            <>
              <h1 className={cx('title')}>Bạn có 0 việc làm đã lưu</h1>
              <h3 className={cx('subtitle')}>Trời ơi! Bạn chưa lưu việc làm nào.</h3>
              <Image src={images.none_jobs_saved} alt="apply-now_img" className={cx('saved-jobs_img')} />
              <h3 className={cx('subtitle')}>Bấm vào trái tim để lưu việc làm.</h3>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default SavedJobs;
