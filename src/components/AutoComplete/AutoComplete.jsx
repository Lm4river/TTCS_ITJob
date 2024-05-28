import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AutoComplete.module.scss';

const cx = classNames.bind(styles);

function AutoComplete({ className, search = '', items = [], handleAdd = () => {}, isShow = true }) {
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    setSkillList(items.filter((item) => item.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  if (isShow || search.trim().length > 0) {
    return (
      <div className={cx('wrapper', className)}>
        {skillList
          .filter((skill) => skill.toLowerCase().includes(search.toLowerCase()))
          .slice(0, 10)
          .map((item, index) => (
            <span className={cx('item')} key={index} onClick={() => handleAdd(item)}>
              {item}
            </span>
          ))}
        {skillList.length === 0 && <i className={cx('not-found')}>Không có kết quả nào</i>}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  className: PropTypes.string,
  search: PropTypes.string,
  items: PropTypes.array,
  handleAdd: PropTypes.func,
  isShow: PropTypes.bool,
};

export default memo(AutoComplete);
//tìm kiếm 