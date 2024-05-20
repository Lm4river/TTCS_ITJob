import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TopCompany.module.scss';
import Image from '~/components/Image';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function TopCompany({ data }) {
  const { jobList } = useReduxSelector();

  const { id, name, logo, province } = data;
  const numberOfJobOpening = jobList.filter((job) => job.companyId === id).length;

  return (
    <Link
      className={cx('wrapper')}
      to={config.routes.companyProfile.replace(
        ':companyname',
        name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() + id.replace('_', '-').toLowerCase(),
      )}
    >
      <div className={cx('logo')}>
        <Image src={logo} alt="company_logo" />
      </div>

      <h3 className={cx('name')}>{name}</h3>

      <div className={cx('info')}>
        {numberOfJobOpening > 0 && (
          <>
            <span className={cx('job-number')}>
              <span>{numberOfJobOpening > 1 ? `${numberOfJobOpening} Việc làm` : `${numberOfJobOpening} Job`}</span>
              {/* <span>-</span> */}
            </span>

            <span>{province}</span>
          </>
        )}
      </div>
    </Link>
  );
}

TopCompany.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(TopCompany);
