import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';

import styles from './SignUp.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Form from '~/components/Form';
import Modal from '~/components/Modal';
import { usersSliceActions } from '~/redux/slices';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

const inputItems = [
  {
    name: 'fullname',
    label: 'Fullname',
    type: 'text',
    id: 'fullname',
    placeholder: 'Name',
    require: true,
  },
  {
    name: 'email',
    label: 'Email',
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

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList, currentUser } = useReduxSelector();

  const [activeOverlay, setActiveOverlay] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = useCallback((newUser) => {
    if (userList.some((user) => user.email === newUser.email)) {
      setIsSuccess(false);
    } else {
      dispatch(usersSliceActions.signUp(newUser));
      setIsSuccess(true);
    }

    setActiveOverlay(true);
  }, []);

  const handleSetActiveOverlay = useCallback(setActiveOverlay, []);

  const handleDelay = useCallback(() => alert('Xin lỗi! Chức năng này chưa được phát triển.'), []);

  if (currentUser) {
    navigate(config.routes.home);
  } else {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('user-authentication')}>
            <h3 className={cx('header')}>
              <span>Chào mừng bạn đến với </span>
              <Image src={"https://i.imgur.com/gyizo98.png"} alt="logo_img" />
            </h3>

            <div className={cx('content')}>
              <div className={cx('signup-form')}>
                <h2 className={cx('form-title')}>Đăng ký</h2>
                <Button className={cx('form-btn')} primary xl onClick={handleDelay}>
                  <span className={cx('google-logo')}>
                    <Image src={images.google} alt="google-icon" />
                  </span>
                  <span>Đăng ký với Google</span>
                </Button>

                <div className={cx('separator')}>
                  <span className={cx('separator-line')}></span>
                  <span className={cx('separator-text')}>OR</span>
                  <span className={cx('separator-line')}></span>
                </div>

                <Form
                  items={inputItems}
                  handleSubmit={(data) => handleSignUp({ ...data, id: uuidv4() })}
                  submitBtn="Sign up with Email"
                />

                <div className={cx('sign-in')}>
                  <span>Bạn đã có tài khoản chưa?</span>
                  <Link to={config.routes.signIn}>Đăng nhập ngay!</Link>
                </div>

                <div className={cx('form-note')}>
                  <span className={cx('note-title')}>Ghi chú:</span>
                  <span className={cx('note-text')}>
                  Mật khẩu phải chứa ít nhất 8 ký tự. Tổ hợp các ký hiệu, số, chữ hoa, chữ thường.
                  </span>
                </div>
              </div>

              <div className={cx('sign-up_image')}>
                <Image src={images.success} alt="signup_img" />
              </div>
            </div>
          </div>
        </div>

        <Modal
          title={isSuccess ? "Tuyệt, bạn gần như đã hoàn tất!" : 'Tài khoản email đã tồn tại!'}
          message={
            isSuccess ? "Hãy đăng nhập để tìm kiếm và nhận được công việc mơ ước của bạn." : 'Vui lòng sử dụng email khác để đăng ký.'
          }
          btn={isSuccess ? 'Đăng nhập' : 'Đăng ký lại'}
          action={() => {
            isSuccess ? navigate(config.routes.signIn) : setActiveOverlay(false);
          }}
          active={activeOverlay}
          setActive={handleSetActiveOverlay}
        />
      </div>
    );
  }
}

export default SignUp;
