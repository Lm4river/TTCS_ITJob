import { memo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import images from '~/assess/images';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function JobHeader({ className, job = {}, company = {} }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, headerShrink } = useReduxSelector();
  const [activeOverlay, setActiveOverlay] = useState(false);

  const handleToggleSaveJob = () => {
    if (currentUser) {
      let savedJobList = currentUser.savedJobs || [];
      if (savedJobList.includes(job.id)) {
        savedJobList = savedJobList.filter((jobId) => jobId !== job.id);
      } else {
        savedJobList = [...savedJobList, job.id];
      }

      dispatch(
        usersSliceActions.updateUser({
          id: currentUser.id,
          key: 'savedJobs',
          payload: savedJobList,
        }),
      );
    } else {
      navigate(config.routes.signIn);
    }
  };

  const handleApplyJob = useCallback(() => {
    if (currentUser) {
      let appliedJobList = currentUser.appliedJobs || [];
      appliedJobList = [...appliedJobList, job.id];

      dispatch(
        usersSliceActions.updateUser({
          id: currentUser.id,
          key: 'appliedJobs',
          payload: appliedJobList,
        }),
      );

      setActiveOverlay(true);
    } else {
      navigate(config.routes.signIn);
    }
  }, [job]);

  const handleSetActiveOverlay = useCallback(setActiveOverlay, []);

  if (job && company) {
    return (
      <header className={cx('wrapper', className, { shrink: headerShrink })}>
        <h1 className={cx('title')}>{job.title}</h1>
        <div className={cx('sub-title')}>{company.name}</div>
        <div className={cx('apply')}>
          {!!currentUser && currentUser?.appliedJobs?.includes(job.id) ? (
            <button className={cx('applied')} disabled>
              Ứng tuyển
            </button>
          ) : (
            <Button primary xl onClick={handleApplyJob}>
              Ứng tuyển
            </Button>
          )}
          <button className={cx('icons')} onClick={handleToggleSaveJob}>
            {currentUser && currentUser.savedJobs?.includes(job.id) ? (
              <FontAwesomeIcon className={cx('like-icon')} icon={solidHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </button>
        </div>

        <Modal
          title="Bạn đã ứng tuyển thành công!"
          active={activeOverlay}
          setActive={handleSetActiveOverlay}
          className={cx('applied-modal')}
        >
          <img src={images.success} alt="successful_img" className={cx('success-img')} />
        </Modal>
      </header>
    );
  }
}

JobHeader.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object,
  company: PropTypes.object,
};

export default memo(JobHeader);
