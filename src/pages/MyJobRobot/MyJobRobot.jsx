import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MyJobRobot.module.scss';
import Jobs from './Jobs';
import Companies from './Companies';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function MyJobRobot() {
  const navigate = useNavigate();
  const { currentUser } = useReduxSelector();

  if (!currentUser) {
    navigate(config.routes.home);
  } else {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <Jobs />
          <Companies />
        </div>
      </div>
    );
  }
}

export default MyJobRobot;
