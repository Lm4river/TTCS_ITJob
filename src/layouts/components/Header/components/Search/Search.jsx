import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import NavItem from '../NavItem';
import { CITIES } from '~/assess/constants';
import PopperWrapper from '~/components/Popper/PopperWrapper';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function Search({ className, big }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchText, location, currentUser } = useReduxSelector();

  const [searchTextDisplay, setSearchTextDisplay] = useState('');
  const [locationDisplay, setLocationDisplay] = useState(
    currentUser && currentUser.location ? currentUser.location : 'Tất cả thành phố',
  );
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [activeCityOption, setActiveCityOption] = useState(false);

  useEffect(() => {
    if (window.location.pathname === config.routes.jobs) {
      setSearchTextDisplay(searchText);
      setLocationDisplay(location);
    }
  }, [searchText, location]);

  const handleSearchJobs = () => {
    // reset searchTextError
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    // set value for searchText & location
    dispatch(filtersSlice.actions.searchFilterChange(searchTextDisplay));
    dispatch(filtersSlice.actions.locationFilterChange(locationDisplay));

    // navigate to job page and reset filters
    dispatch(filtersSlice.actions.resetFilters());
    navigate(config.routes.jobs);
  };

  return (
    <NavItem className={cx('search', className, { big })}>
      <div className={cx('container')}>
        {/* search input */}
        <div className={cx('search-input', { active: activeInputSearch })}>
          {big ? <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} /> : ''}
          <input
            type="text"
            placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..."
            onFocus={() => {
              setActiveOverlay(true);
              setActiveInputSearch(true);
            }}
            value={searchTextDisplay}
            onChange={(e) => setSearchTextDisplay(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchJobs();
                setActiveOverlay(false);
                setActiveInputSearch(false);
                setActiveCityOption(false);
              }
            }}
          />
          <i className={cx({ show: !!searchTextDisplay })} onClick={() => setSearchTextDisplay('')}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </div>

        {/* city options */}
        <Tippy
          render={(attrs) => (
            <div className={cx('city-container')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('city-option')} stretch>
                {CITIES.map((city, index) => (
                  <span key={index} className={cx('city-item')} onClick={() => setLocationDisplay(city)}>
                    {city}
                  </span>
                ))}
              </PopperWrapper>
            </div>
          )}
          interactive
          placement="bottom"
          appendTo={document.body}
          trigger="click"
          hideOnClick="true"
          onClickOutside={(instance) => instance.hide()}
        >
          <div
            className={cx('city', { active: activeCityOption })}
            onClick={() => {
              setActiveOverlay(true);
              setActiveCityOption(true);
            }}
          >
            <div>
              {big ? (
                <i className={cx('city-icon')}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </i>
              ) : (
                ''
              )}
              <span className={cx('city-title')}>{locationDisplay}</span>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </Tippy>

        {/* search button */}
        <button className={cx('search-btn')} onClick={handleSearchJobs}>
          {big ? <span>Tìm kiếm</span> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
        </button>

        {/* overlay */}
        <div
          className={cx('overlay', { active: activeOverlay })}
          onClick={() => {
            setActiveOverlay(false);
            setActiveInputSearch(false);
            setActiveCityOption(false);
          }}
        ></div>
      </div>
    </NavItem>
  );
}

Search.propTypes = {
  className: PropTypes.string,
  big: PropTypes.bool,
};

export default memo(Search);
