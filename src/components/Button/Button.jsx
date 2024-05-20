import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, to, href, basic, primary, outline, md, lg, xl, onClick = () => {}, ...props }) {
  // button type (choose only one, default is basic): basic/ primary/ outlined
  // button size (choose only one, default is small): md/ lg/ xl

  let Wrap = 'button';

  if (to) {
    Wrap = Link;
  } else if (href) {
    Wrap = 'a';
  }

  return (
    <Wrap
      {...props}
      className={cx('wrapper', className, { basic, primary, outline, md, lg, xl })}
      to={to}
      href={href}
      onClick={onClick}
    >
      {children}
    </Wrap>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  basic: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(Button);
