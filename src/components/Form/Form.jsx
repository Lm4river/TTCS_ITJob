import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './Form.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Form({ items = [], handleSubmit = () => {}, submitBtn = 'Submit' }) {
  const initValues = {};
  items.map((item) => {
    initValues[item.name] = '';
  });

  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState(initValues);
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    isFormValid && handleSubmit(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!values.fullname && Object.keys(initValues).includes('fullname')) {
      errors.fullname = "Không thể để trống";
    }

    if (!values.email && Object.keys(initValues).includes('email')) {
      errors.email = "Không thể để trống";
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Vui lòng kiểm tra email của bạn';
    }

    if (!values.password && Object.keys(initValues).includes('password')) {
      errors.password = "Không thể để trống";
    } else if (values.password.length < 8) {
      errors.password = 'Tối thiểu 8 ký tự';
    } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Ít nhất 1 ký hiệu, 1 số, 1 chữ hoa, 1 chữ thường.';
    }
    return errors;
  };

  const validateEachIndividual = (input, value) => {
    const errors = { ...formErrors };
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    switch (input) {
      case 'fullname':
        if (!value) errors.fullname = "Không thể để trống";
        break;
      case 'email':
        if (!value) {
          errors.email = "Không thể để trống";
        } else if (!emailRegex.test(value)) {
          errors.email = 'Vui lòng kiểm tra email của bạn';
        }
        break;
      case 'password':
        if (!value) {
          errors.password = "Không thể để trống";
        } else if (value.length < 8) {
          errors.password = 'Tối thiểu 8 ký tự';
        } else if (!passwordRegex.test(value)) {
          errors.password = 'Ít nhất 1 ký hiệu, 1 số, 1 chữ hoa, 1 chữ thường.';
        }
        break;
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formValues).some((key) => !formValues[key])) {
      return;
    }

    let valid = true;
    Object.keys(formErrors).forEach((key) => {
      if (!!formErrors[key]) {
        valid = false;
      }
    });
    setIsFormValid(valid);
  }, [formErrors, formValues]);

  return (
    <form className={cx('wrapper')} onSubmit={handleSubmitForm}>
      {items.map((input, index) => (
        <div key={index} className={cx('form-group', { invalid: !!formErrors[input.name] })}>
          <label htmlFor={input.name} className={cx('form-lable')}>
            <span>{input.label}</span>
            {input.require && <span className={cx('required-sign')}>*</span>}
          </label>
          {input.type === 'password' ? (
            <div className={cx('password')}>
              <input
                type={toggleShowPassword ? 'text' : input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                className={cx('form-control')}
                value={formValues[input.name]}
                onChange={handleChange}
                onBlur={(e) => {
                  setFormErrors(validateEachIndividual(input.name, e.target.value));
                }}
              />
              <i className={cx('toggle-show-password')} onClick={() => setToggleShowPassword((prev) => !prev)}>
                {toggleShowPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </i>
            </div>
          ) : (
            <input
              type={input.type}
              id={input.id}
              name={input.name}
              placeholder={input.placeholder}
              className={cx('form-control')}
              value={formValues[input.name]}
              onChange={handleChange}
              onBlur={(e) => {
                setFormErrors(validateEachIndividual(input.name, e.target.value));
              }}
            />
          )}
          <span className={cx('form-message')}>{formErrors[input.name]}</span>
        </div>
      ))}

      <Button className={cx('form-btn')} primary xl>
        {submitBtn}
      </Button>
    </form>
  );
}

Form.propTypes = {
  items: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
  submitBtn: PropTypes.string,
};

export default memo(Form);
