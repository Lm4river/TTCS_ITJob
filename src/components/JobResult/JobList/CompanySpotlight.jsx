import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './JobList.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles);

function CompanySpotlight({ className, topCompanyList = [], jobList = [] }) {
  // lấy một cty bất kì trong danh sách
  const randomIndex = Math.floor(Math.random() * topCompanyList.length);
  const topCompany = topCompanyList[randomIndex];

  // danh sách công việc 
  let topCompanyJobList;
  if (!!topCompany) {
    topCompanyJobList = jobList.filter((job) => job.companyId === topCompany.id);
  }
  // Nếu không có công ty được chọn, component không trả về gì cả và không hiển thị gì trên giao diện
  if (topCompany) {
    return (
      <div className={cx('company-spotlight', className)}>
        <h3 className={cx('company-title')}>Tiêu điểm công ty</h3>
        <div className={cx('company-images')}>
          <Link
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
          >
            <Image className={cx('image')} src={topCompany.images[0]} alt="company_img" />
          </Link>
          <CompanyImage
            className={cx('logo')}
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
            src={topCompany.logo}
            alt="company_logo"
          />
        </div>

        <Link
          className={cx('company-info')}
          to={config.routes.companyProfile.replace(
            ':companyname',
            topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
              topCompany.id.replace('_', '-').toLowerCase(),
          )}
        >
          <h4>{topCompany.name}</h4>
          <p className={cx('location')}>
            {typeof topCompany.district === 'number'
              ? `District ${topCompany.district}, ${topCompany.province}`
              : `${topCompany.district}, ${topCompany.province}`}
          </p>
          <p className={cx('slogan')}>{topCompany.slogan || topCompany.name}</p>
        </Link>

        <div>
          {topCompanyJobList.slice(0, 3).map((job, index) => (
            <Link
              key={index}
              className={cx('job-item')}
              to={config.routes.job.replace(
                ':jobname',
                job.title.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() + job.id.replace('_', '-').toLowerCase(),
              )}
            >
              {job.title}
            </Link>
          ))}
          <Link
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
            className={cx('job-item', 'view-all')}
          >
            {`Xem ${topCompanyJobList.length} Việc làm`}{' '}
            <i>
              <FontAwesomeIcon icon={faCaretRight} />
            </i>
          </Link>
        </div>
      </div>
    );
  }
}

CompanySpotlight.propTypes = {
  className: PropTypes.string,
  topCompanyList: PropTypes.array,
  jobList: PropTypes.array,
};

export default memo(CompanySpotlight);
