import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './SignIn.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Modal from '~/components/Modal';
import { useReduxSelector } from '~/redux/selectors';
import { usersSlice, usersSliceActions } from '~/redux/slices';
import AutoComplete from '~/components/AutoComplete';

const cx = classNames.bind(styles);

const inputItems = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    id: 'email',
    placeholder: 'Email',
    require: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    require: true,
  },
];

function SignIn() {
  const dispatch = useDispatch();
  const { userList, currentUser, skillsSet } = useReduxSelector();
  const navigate = useNavigate();
  const inputRef = useRef();

  const [skillsSetOverlay, setSkillsSetOverlay] = useState(false);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userSkillsSet, setUserSkillSet] = useState([]);
  const [searchSkill, setSearchSkill] = useState('');

  const handleSignIn = useCallback((data) => {
    if (userList.some((user) => user.email === data.email && user.password === data.password)) {
      dispatch(usersSlice.actions.signIn(userList.find((user) => user.email === data.email).id));
      setIsSuccess(true);
    } else {
      userList.some((user) => user.email === data.email && user.password !== data.password)
        ? alert('Wrong password')
        : alert('Email account does not exist');
      setIsSuccess(false);
    }
  }, []);

  const handleAddSkill = useCallback((item) => {
    if (!userSkillsSet.includes(item) && userSkillsSet.length < 3) {
      setUserSkillSet((prev) => [...prev, item]);
      setSearchSkill('');
      inputRef.current.focus();
    } else if (userSkillsSet.length === 3) {
      alert('You can select maximum 3 skills');
    }
  }, []);

  const handleSearchJobs = () => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'skills',
        payload: userSkillsSet,
      }),
    );
    navigate(config.routes.home);
  };

  // show skillsSet modal for user to pick their skills
  useEffect(() => {
    if ((isSuccess && currentUser && currentUser?.skills?.length === 0) || (isSuccess && !currentUser?.skills)) {
      setSkillsSetOverlay(true);
    } else if (isSuccess && currentUser && currentUser?.skills?.length > 0) {
      navigate(config.routes.home);
    }
  }, [currentUser]);

  const handleSetSkillsSetOverlay = useCallback(setSkillsSetOverlay, []);

  const handleDelay = useCallback(() => alert('Xin lỗi! Chức năng này chưa được phát triển.'), []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('user-authentication')}>
          <h3 className={cx('header')}>
            <span>Chào mừng bạn đến với</span>
            <Image src={"https://i.imgur.com/gyizo98.png"} alt="logo_img" />
          </h3>

          <div className={cx('content')}>
            <div className={cx('signin-form')}>
              <Button className={cx('form-btn')} primary xl onClick={handleDelay}>
                <span className={cx('google-logo')}>
                  <Image src={images.google} alt="google-icon" />
                </span>
                <span>Đăng nhập bằng Google</span>
              </Button>

              <div className={cx('separator')}>
                <span className={cx('separator-line')}></span>
                <span className={cx('separator-text')}>hoặc</span>
                <span className={cx('separator-line')}></span>
              </div>

              <Form items={inputItems} handleSubmit={(data) => handleSignIn(data)} submitBtn="Đăng nhập bằng Email" />

              <div className={cx('sign-up')}>
                <span>Bạn chưa có tài khoản? </span>
                <Link to={config.routes.signUp}>Đăng ký ngay!</Link>
              </div>
            </div>

            <div className={cx('sign-in_message')}>
              <h2>Đăng nhập để có quyền truy cập ngay vào hàng ngàn đánh giá và thông tin về lương</h2>
              <ul>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Xem mức lương để giúp bạn thương lượng lời đề nghị hoặc tăng lương</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Tìm hiểu về quyền lợi, phỏng vấn, văn hóa công ty qua các bài đánh giá</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Dễ dàng áp dụng chỉ với 1 cú nhấp chuột</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Quản lý hồ sơ và quyền riêng tư của riêng bạn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* skills set modal */}
      <Modal
        title="Pick-up your skills (maximum 3)"
        btn="Search for jobs"
        action={isSuccess ? handleSearchJobs : () => navigate(config.routes.home)}
        active={skillsSetOverlay}
        setActive={handleSetSkillsSetOverlay}
      >
        <div className={cx('skills-set')}>
          {userSkillsSet.map((skill, index) => (
            <div key={index} className={cx('skill-item')}>
              <span>{skill}</span>
              <button
                className={cx('clear-skill')}
                onClick={() => setUserSkillSet((prev) => prev.filter((skillItem) => skillItem !== skill))}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
          <input
            className={cx('skill-input')}
            type="text"
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            ref={inputRef}
            onFocus={() => setShowAutoComplete(true)}
            onBlur={() => setTimeout(() => setShowAutoComplete(false), 200)}
          />
          <AutoComplete
            className={cx('skill-list')}
            search={searchSkill}
            items={skillsSet}
            handleAdd={(skill) => handleAddSkill(skill)}
            isShow={showAutoComplete}
          />
        </div>
      </Modal>
    </div>
  );
}

export default SignIn;
