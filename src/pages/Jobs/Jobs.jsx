import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Jobs.module.scss';
import FilterJobs from './FilterJobs';
import JobResult from '~/components/JobResult';
import Path from '~/components/Path';
import Search from '~/layouts/components/Header/components/Search';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Jobs() {
  const { filteredJobList } = useReduxSelector();

  // set scroll to top when loading the page
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-form')}>
        <Search className={cx('head-search')} big />
      </div>

      <div className={cx('container')}>
        <FilterJobs />
        <JobResult jobList={filteredJobList} />
      </div>

      <Path items={[{ title: 'Trang chủ', to: config.routes.home }, { title: 'Tất cả việc làm IT' }]} />
    </div>
  );
}

export default Jobs;
