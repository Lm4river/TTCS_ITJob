import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faFileLines } from '@fortawesome/free-solid-svg-icons';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function ProfileInfo() {
  return (
    <>
      <h3 className={cx('profile-title')}></h3>
      <p className={cx('profile-subtitle')}>
      Hãy upload CV để ứng tuyển nhanh hơn và nhận được lời mời hấp dẫn từ nhà tuyển dụng!
      </p>

      <div className={cx('profile-actions')}>
        <div className={cx('upload-cv')}>
          <input id="cv" type="file" />
          <label htmlFor="cv">
            <i>
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </i>
            <h4>CV của bạn bị thiếu!</h4>
            <p>Chúng tôi chấp nhận các tệp .doc .docx, .pdf, không có mật khẩu bảo vệ, tối đa 1MB</p>
          </label>
        </div>

        <div className={cx('create-profile')} onClick={() => alert('Xin lỗi! Chức năng này chưa được phát triển.')}>
          <i>
            <FontAwesomeIcon icon={faFileLines} />
          </i>
          <h4>Tạo hồ sơ</h4>
          <p>Nhanh tay tạo hồ sơ để có thêm cơ hội việc làm</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
