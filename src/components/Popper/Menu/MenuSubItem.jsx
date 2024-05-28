import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function MenuSubItem({ children, className, search, searchBy }) {
  const dispatch = useDispatch();
  const { companyList } = useReduxSelector();
  const navigate = useNavigate();

  const handleSearchJobs = () => {
    if (search) {
      // reset searchTextError
      dispatch(filtersSlice.actions.searchTextErrorChange(false));

      // filter jobs bằng giá trị tìm kiếm
      switch (searchBy) {
        case 'company':
          dispatch(filtersSlice.actions.searchFilterChange(''));
          dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));
          break;
        case 'location':
          dispatch(filtersSlice.actions.searchFilterChange(''));
          dispatch(filtersSlice.actions.locationFilterChange(children));
          break;
        default:
          dispatch(filtersSlice.actions.searchFilterChange(children));
          dispatch(filtersSlice.actions.locationFilterChange('Tất cả thành phố'));
          break;
      }

      // điều hướng companyProfile/ job page và reset filters
      if (searchBy === 'company') {
        navigate(
          config.routes.companyProfile.replace(
            ':companyname',
            children.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
              companyList
                .find((company) => company.name === children)
                .id.replace('_', '-')
                .toLowerCase(),
          ),
        );

        companyList.find((company) => company.name === children).id !==
          window.location.pathname.slice(-7).replace('-', '_') && window.location.reload(false);
      } else {
        dispatch(filtersSlice.actions.resetFilters());
        navigate(config.routes.jobs);
      }
    }
  };

  return (
    <div className={cx('menu-subitem', className)} onClick={handleSearchJobs}>
      {children}
    </div>
  );
}

MenuSubItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchBy: PropTypes.string,
};

export default memo(MenuSubItem);
//tạo ra các mục con trong menu,tìm kiếm và điều hướng 