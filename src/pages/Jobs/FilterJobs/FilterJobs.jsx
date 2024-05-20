import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './FilterJobs.module.scss';
import FilterInput from './FilterInput';
import { FILTERS, FILTER_TITLES } from '~/assess/constants';
import MobileMenu from '~/components/MobileMenu';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function FilterJobs() {
  const dispatch = useDispatch();
  const { searchTextError } = useReduxSelector();

  const [levels, setLevels] = useState([]);
  const [salaryRanges, setSalaryRanges] = useState([]);
  const [companyTypes, setCompanyTypes] = useState([]);
  const [activeOverlay, setActiveOverlay] = useState(false);

  const UPDATED_FILTERS = FILTERS.map((filter) => ({
    ...filter,
    state:
      filter.title === FILTER_TITLES.level
        ? levels
        : filter.title === FILTER_TITLES.salary
          ? salaryRanges
          : filter.title === FILTER_TITLES.companyType
            ? companyTypes
            : {},
    setState:
      filter.title === FILTER_TITLES.level
        ? setLevels
        : filter.title === FILTER_TITLES.salary
          ? setSalaryRanges
          : filter.title === FILTER_TITLES.companyType
            ? setCompanyTypes
            : {},
  }));

  // reset filters when accessing the page
  useEffect(() => {
    handleClearFilters();
  }, []);

  const checkedCount = (title) => {
    switch (title) {
      case FILTER_TITLES.level:
        if (levels.length > 0) {
          return <span className={cx('filter-number')}>{levels.length}</span>;
        } else return;
      case FILTER_TITLES.salary:
        if (salaryRanges.length > 0) {
          return <span className={cx('filter-number')}>{salaryRanges.length}</span>;
        } else return;
      case FILTER_TITLES.companyType:
        if (companyTypes.length > 0) {
          return <span className={cx('filter-number')}>{companyTypes.length}</span>;
        } else return;
      default:
        return;
    }
  };

  const handleFilterJobs = () => {
    if (searchTextError) {
      dispatch(filtersSlice.actions.searchTextErrorChange(false));
    }

    dispatch(filtersSlice.actions.levelsFilterChange(levels));
    dispatch(filtersSlice.actions.salaryRangesFilterChange(salaryRanges));
    dispatch(filtersSlice.actions.companyTypesFilterChange(companyTypes));

    setActiveOverlay(false);
  };

  const handleClearFilters = () => {
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    setLevels([]);
    setSalaryRanges([]);
    setCompanyTypes([]);
    dispatch(filtersSlice.actions.resetFilters());

    setActiveOverlay(false);
  };

  // update filter states when checking/unchecking filter items
  const handleFilterCheck = (e, title, setState) => {
    let isChecked = e.target.checked;

    if (isChecked) {
      switch (title) {
        case FILTER_TITLES.salary:
          setState((prev) => [...prev, Number(e.target.value)]);
          break;
        default:
          setState((prev) => [...prev, e.target.value]);
          break;
      }
    } else {
      switch (title) {
        case FILTER_TITLES.salary:
          setState((prev) => prev.filter((item) => item !== Number(e.target.value)));
          break;
        default:
          setState((prev) => prev.filter((item) => item !== e.target.value));
          break;
      }
    }
  };

  // reset checkbox on submit/clear all
  const handleResetCheckbox = (item, state) => {
    return state.includes(item);
  };

  const handleSetActiveOverlay = useCallback(setActiveOverlay, []);

  return (
    <div className={cx('wrapper')}>
      {/* filters for desktop */}
      <div className={cx('filter-form')}>
        {UPDATED_FILTERS.map((filter, index) => (
          <FilterInput
            key={index}
            title={filter.title}
            items={filter.data}
            leftCharacter={filter.leftCharacter}
            rightCharacter={filter.rightCharacter}
            state={filter.state}
            setState={filter.setState}
          >
            <button className={cx('filter-item')}>
              {checkedCount(filter.title)}
              {<span>{filter.title}</span>}
              {
                <i>
                  <FontAwesomeIcon icon={faCaretDown} />
                </i>
              }
            </button>
          </FilterInput>
        ))}

        <button className={cx('filter-item', 'filter-btn')} onClick={handleFilterJobs}>
          <FontAwesomeIcon icon={faFilter} />
        </button>

        <button className={cx('clear-btn')} onClick={handleClearFilters}>
          Xóa bộ lọc
        </button>
      </div>

      {/* filters for mobile */}
      <div className={cx('filter-form_mobile')}>
        <div className={cx('filter-btn_mobile')} onClick={() => setActiveOverlay(true)}>
          <span>Bộ lọc</span>
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        <MobileMenu light active={activeOverlay} setActive={handleSetActiveOverlay}>
          <>
            <h3 className={cx('filter-title_mobile')}>Filter</h3>
            <div className={cx('filter-content_mobile')}>
              {UPDATED_FILTERS.map((filter, index) => (
                <div key={index} className={cx('filter-category_mobile')}>
                  <h5 className={cx('category-title_mobile')}>{filter.title}</h5>
                  <div className={cx('category-item_mobile')}>
                    {filter.data.map((item, index2) => (
                      <div key={index2}>
                        <input
                          id={index2 + item + 'filters'}
                          type="checkbox"
                          value={item}
                          name={item}
                          onChange={(e) => handleFilterCheck(e, filter.title, filter.setState)}
                          checked={handleResetCheckbox(item, filter.state)}
                        />
                        <label htmlFor={index2 + item + 'filters'}>
                          {filter.leftCharacter && <span className={cx('left-character')}>{filter.leftCharacter}</span>}
                          {typeof item === 'number' ? item.toLocaleString('en-US') : item}
                          {filter.rightCharacter && (
                            <span className={cx('right-character')}>{filter.rightCharacter}</span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className={cx('filter-action_mobile')}>
                <button className={cx('filter-item', 'filter-btn')} onClick={handleFilterJobs}>
                  Áp dụng bộ lọc
                </button>

                <button className={cx('clear-btn')} onClick={handleClearFilters}>
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </>
        </MobileMenu>
      </div>
    </div>
  );
}

export default FilterJobs;
