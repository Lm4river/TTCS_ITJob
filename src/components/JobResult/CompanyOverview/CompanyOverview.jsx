import classNames from 'classnames/bind';
import Flag from 'react-world-flags';//hiển thị cờ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faClock, faFlag } from '@fortawesome/free-regular-svg-icons';

import styles from './CompanyOverview.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function CompanyOverview() {
  const { selectedCompany } = useReduxSelector();

  if (selectedCompany) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <CompanyImage src={selectedCompany.logo} />

          <div className={cx('name')}>
            <h3 className={cx('title')}>{selectedCompany.name}</h3>
            <span className={cx('sub-title')}>{selectedCompany.slogan || selectedCompany.name}</span>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('characteristics')}>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>{selectedCompany.type}</CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
              {selectedCompany.size}
            </CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
              {selectedCompany.workingDays}
            </CharacteristicItem>
            <CharacteristicItem
              icon={<Flag code={selectedCompany.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
            >
              {selectedCompany.country}
            </CharacteristicItem>
            {!selectedCompany.overtime && (
              <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>No OT</CharacteristicItem>
            )}
          </div>

          <div className={cx('view-profile')}>
            <Button
              to={config.routes.companyProfile.replace(
                ':companyname',
                selectedCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                  selectedCompany.id.replace('_', '-').toLowerCase(),
              )}
              outline
              lg
            >
              Xem hồ sơ công ty
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyOverview;
