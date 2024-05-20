import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ className, jobsPerPage = 10, showNavigateButtons = 5, totalJob, currentPage, paginate }) {
  // jobsPerPage: user to set, default value is 10
  // showNavigateButtons: user to set, default value is 5
  // totalJob: jobList.length
  // currentPage: page number of current post, using useState hook
  // paginate: function to set current page when click on page number

  const lastPage = Math.ceil(totalJob / jobsPerPage);

  let pageNumbers = [];

  if (lastPage <= 5) {
    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }

      pageNumbers = [...pageNumbers, '...', lastPage];
    } else if (currentPage >= lastPage - 2) {
      pageNumbers = [1, '...'];

      for (let i = currentPage - 1; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage];
    }
  }

  return (
    <nav>
      <ul className={cx('wrapper', className)}>
        {/* back button */}
        {lastPage > showNavigateButtons && currentPage > 1 && (
          <li className={cx('page-number')} onClick={() => paginate(currentPage - 1)}>
            {'<'}
          </li>
        )}

        {/* pages */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <li className={cx('dot')} key={index}>
                {page}
              </li>
            );
          } else {
            return (
              <li
                className={cx('page-number', { active: page === currentPage })}
                key={index}
                onClick={() => paginate(page)}
              >
                {page}
              </li>
            );
          }
        })}

        {/* next button */}
        {lastPage > showNavigateButtons && currentPage < lastPage && (
          <li className={cx('page-number')} onClick={() => paginate(currentPage + 1)}>
            {'>'}
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  totalJob: PropTypes.number.isRequired,
  jobsPerPage: PropTypes.number.isRequired,
  showNavigateButtons: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default memo(Pagination);
