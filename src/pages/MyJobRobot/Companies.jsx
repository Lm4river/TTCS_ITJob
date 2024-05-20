import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './MyJobRobot.module.scss';
import Button from '~/components/Button';
import AutoComplete from '~/components/AutoComplete';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function Companies() {
  const dispatch = useDispatch();
  const { companyList, currentUser } = useReduxSelector();
  const [keyWord, setKeyWord] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const inputRef = useRef();

  const companyNameList = companyList.map((company) => company.name);

  const handleUpdateFollowedCompany = (newList) => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'followedCompany',
        payload: newList,
      }),
    );
  };

  const handleFollowCompany = (companyName) => {
    if (companyName.length === 0 || keyWord.length === 0) {
      return;
    }

    const companyId = companyList.find((company) => company.name === companyName).id;

    if (currentUser.followedCompany?.some((id) => id === companyId)) {
      alert('Bạn đã đăng ký cho công ty này!');
      setKeyWord('');
      setSelectedCompany('');
      return;
    } else if (currentUser.followedCompany?.length === 5) {
      alert('Bạn không thể theo dõi nhiều hơn 5 công ty!');
      setKeyWord('');
      setSelectedCompany('');
      return;
    }

    const newList = currentUser.followedCompany ? [...currentUser.followedCompany, companyId] : [companyId];
    handleUpdateFollowedCompany(newList);
    setKeyWord('');
    setSelectedCompany('');
  };

  const handleUnfollowCompany = (companyId) => {
    const newList = currentUser.followedCompany.filter((id) => id !== companyId);
    handleUpdateFollowedCompany(newList);
  };

  const handleSelectCompany = useCallback((companyName) => {
    setSelectedCompany(companyName);
    setKeyWord(companyName);
  }, []);

  return (
    <div className={cx('box')}>
      {/* header */}
      <header className={cx('header')}>
        <h1 className={cx('title')}>Công ty đang theo dõi của tôi</h1>
        <p className={cx('subtitle')}>
        Thêm mới hoặc xóa các Công ty sau đây của bạn tại đây. Bạn có thể theo dõi tối đa 5 công ty.
        </p>
      </header>
      {/* followed company list */}
      {currentUser?.followedCompany && (
        <div className={cx('subscribed-list')}>
          {currentUser.followedCompany.map((item, index) => (
            <div key={index} className={cx('subscribed-item')}>
              <div>
                <button className={cx('clear-btn')} onClick={() => handleUnfollowCompany(item)}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <Link
                  to={config.routes.companyProfile.replace(
                    ':companyname',
                    companyList
                      .find((company) => company.id === item)
                      .name.replace(/[^a-zA-Z1-10000]/g, '-')
                      .toLowerCase() + item.replace('_', '-').toLowerCase(),
                  )}
                  className={cx('company-name')}
                >
                  {companyList.find((company) => company.id === item).name}
                </Link>
              </div>

              <span className={cx('myjr-status')}>Đang theo dõi</span>
            </div>
          ))}
        </div>
      )}

      {/* actions */}
      <div className={cx('form')}>
        <div className={cx('form-input', 'company')}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Chọn công ty"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            onBlur={() => setTimeout(() => setShowAutoComplete(false), 200)}
            onFocus={() => setShowAutoComplete(true)}
          />
          <i
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
          <AutoComplete
            search={keyWord}
            items={companyNameList}
            handleAdd={(companyName) => handleSelectCompany(companyName)}
            isShow={showAutoComplete}
          />
        </div>

        <div className={cx('form-actions', 'float-right')}>
          <Button className={cx('myrj-btn')} primary onClick={() => handleFollowCompany(selectedCompany)}>
            Theo dõi công ty
          </Button>
        </div>
      </div>
      {/* more infomation */}
      <div className={cx('explanation')}>
        <p className={cx('explanation-waring')}>Đừng bỏ lỡ công việc tiếp theo của bạn!</p>
        <p>
        Thêm tên công ty mà bạn quan tâm, sau đó nhấp vào "Theo dõi công ty". Chúng tôi sẽ gửi cho bạn những đánh giá mới qua email về các công ty bạn theo dõi và công việc mới từ họ, tối đa 1 email mỗi ngày.
        </p>
      </div>
    </div>
  );
}

export default Companies;
