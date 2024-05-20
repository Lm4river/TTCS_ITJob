import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Button from '~/components/Button';
import ToggleSwitch from '~/components/ToggleSwitch';
import Modal from '~/components/Modal';
import images from '~/assess/images';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function AccountInfo() {
  const dispatch = useDispatch();
  const { currentUser } = useReduxSelector();

  const [isAccountToggle, setIsAccountToggle] = useState(false);
  const [isLetterToggle, setIsLetterToggle] = useState(false);
  const [isInvitationToggle, setIsInvitationToggle] = useState(true);
  const [fullname, setFullname] = useState(currentUser.fullname);
  const [coverLetter, setCoverLetter] = useState(currentUser.coverLetter ? currentUser.coverLetter : '');
  const [activeOverlay, setActiveOverlay] = useState(false);

  const handleUserNameChange = useCallback(() => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'fullname',
        payload: fullname,
      }),
    );
  }, [fullname]);

  const handleUserCoverLetterChange = useCallback(() => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'coverLetter',
        payload: coverLetter,
      }),
    );
  }, [coverLetter]);

  const handleActiveOverlay = useCallback(() => setActiveOverlay(false), []);

  const handleSetActiveOverlay = useCallback(setActiveOverlay, []);

  const handleSetAccountToggle = useCallback(() => setIsAccountToggle(!isAccountToggle), [isAccountToggle]);

  const handleSetIsHeaderToggle = useCallback(() => setIsLetterToggle(!isLetterToggle), [isLetterToggle]);

  const handleSetIsInvitationToggle = useCallback(
    () => setIsInvitationToggle(!isInvitationToggle),
    [isInvitationToggle],
  );

  useEffect(() => {
    if (!isInvitationToggle) {
      setActiveOverlay(true);
    }
  }, [isInvitationToggle]);

  return (
    <>
      {/* account */}
      <div className={cx('title-container')}>
        <h3 className={cx('profile-title')}>Tài khoản</h3>
        <span
          className={cx('toggle-btn', 'account')}
          onClick={() => {
            setIsAccountToggle(!isAccountToggle);
          }}
        >
          Thay đổi
        </span>
      </div>

      {/* <h5 className={cx('profile-fullname')}>{currentUser.fullname}</h5> */}
      <p>Email: {currentUser.email}</p>

      <div className={cx('profile-collapse', { show: isAccountToggle })}>
        {/* <div className={cx('form-group')}>
          <label>Email</label>
          <div>{currentUser.email}</div>
        </div> */}

        <div className={cx('form-group')}>
          <label>Username</label>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </div>

        <div className={cx('edit-btn')}>
          <Button outline onClick={handleSetAccountToggle}>
            Hủy
          </Button>
          <Button primary onClick={handleUserNameChange}>
            Lưu
          </Button>
        </div>
      </div>

      {/* cover letter */}
      <div className={cx('title-container')}>
        <h3 className={cx('profile-title')}>Hồ sơ ứng tuyển</h3>
        <span className={cx('toggle-btn', 'cover-letter')} onClick={() => setIsLetterToggle(!isLetterToggle)}>
          Thay đổi
        </span>
      </div>

      <div className={cx('profile-collapse', { show: isLetterToggle })}>
        <textarea
          className={cx('')}
          rows={4}
          placeholder="Ví dụ chi tiết và cụ thể sẽ làm cho ứng dụng của bạn mạnh mẽ hơn..."
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />

        <div className={cx('edit-btn')}>
          <Button outline onClick={handleSetIsHeaderToggle}>
            Hủy
          </Button>
          <Button primary onClick={handleUserCoverLetterChange}>
            Lưu
          </Button>
        </div>
      </div>

      <div className={cx('profile-policy')}>
        <h3 className={cx('profile-title')}>Hồ sơ mật</h3>
        <p className={cx('profile-policy_text')}>
          Nếu bạn tắt tùy chọn này, chúng tôi sẽ không gửi cho bạn bất kỳ lời mời nào trong vòng một năm từ sản phẩm mới nhất của chúng tôi - AI Match dành cho nhà tuyển dụng. Kiểm tra <Link to={config.routes.pending.replace(':pathname', 'faq')}>FQA</Link> để biết thêm chi tiết
        </p>
        <div className={cx('profile-policy_toggle-btn')}>
          <span>Nhận lời mời làm việc</span>
          <ToggleSwitch state={isInvitationToggle} onToggle={handleSetIsInvitationToggle} />
        </div>
      </div>

      <Modal
        title="Warning"
        message="By turning off this option, you will not receive invitation for high salary jobs and fit your skills. Are you sure you want to do this?"
        btn="Yes, stop following"
        action={handleActiveOverlay}
        active={activeOverlay}
        setActive={handleSetActiveOverlay}
      >
        <img src={images.success} alt="unfollow_img" className={cx('success-img')} />
      </Modal>
    </>
  );
}

export default AccountInfo;
