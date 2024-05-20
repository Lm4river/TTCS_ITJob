import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TopCompanies.module.scss';
import TopCompany from './TopCompany';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TopCompanies() {
  const { topCompanyList } = useReduxSelector();
  const [top8, setTop8] = useState([]);

  // function to shuffle an array
  const shuffle = (array) => {
    let currentIndex = array.length,
      newArray = [...array], // to avoid error incase the array is read only
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
  };

  // shuffle the list then get the first 8 companies only
  useEffect(() => {
    setTop8(shuffle(topCompanyList).slice(0, 8));
  }, [topCompanyList]);

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Nhà tuyển dụng hàng đầu</h1>
      <div className={cx('content')}>
        {top8.map((company) => (
          <TopCompany key={company.id} data={company} />
        ))}
      </div>
    </div>
  );
}

export default TopCompanies;
