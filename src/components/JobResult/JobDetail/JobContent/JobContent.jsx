import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobContent.module.scss';

const cx = classNames.bind(styles);

function JobContent({ job = {} }) {
  if (job.id) {
    return (
      <div className={cx('wrapper')}>
        {job.reasonToJoin && <h2 className={cx('title')}>3 lý do hàng đầu để tham gia với chúng tôi</h2>}
        <ul className={cx('detail', 'hightlight')}>
          {job.reasonToJoin?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className={cx('title')}>Mô tả công việc</h2>
        {job.description?.map((item, index) => (
          <div key={index}>
            {item.title && <h3 className={cx('sub-title')}>{`${item.title}: `}</h3>}
            {item.detail && (
              <ul className={cx('detail')}>
                {item.detail?.map((discription, index2) => {
                  if (item.detail.length > 1) {
                    return <li key={index2}>{discription}</li>;
                  } else {
                    return <p key={index2}>{discription}</p>;
                  }
                })}
              </ul>
            )}
          </div>
        ))}

        <h2 className={cx('title')}>Yêu cầu công việc</h2>
        {job.requirements?.map((item, index) => (
          <div key={index}>
            {item.title && <h3 className={cx('sub-title')}>{`${item.title}: `}</h3>}
            <ul className={cx('detail')}>
              {item.detail?.map((requirement, index2) => {
                if (item.detail.length > 1) {
                  return <li key={index2}>{requirement}</li>;
                } else {
                  return <p key={index2}>{requirement}</p>;
                }
              })}
            </ul>
          </div>
        ))}

        <h2 className={cx('title')}>Tại sao bạn sẽ yêu thích làm việc tại đây</h2>
        <ul className={cx('detail')}>
          {job.benefit?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

JobContent.propTypes = {
  job: PropTypes.object,
};

export default memo(JobContent);
