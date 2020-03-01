import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import cs from 'classnames';

const Input = ({ input, meta: { error, touched }, className, ...otherProps }) => {
  const { size, label } = otherProps;
  const inputClassNames = cs(
    styles['input__field'],
    styles[size], //depends on what size given, default is medium
    className,
    {
      [styles['input__field--default']]: input.value === '',
      [styles['input__field--error']]: error && touched,
    },
  );
  return (
    <div className={styles['input__wrapper']}>
      {label && <label className={styles['input__label']} for={input.name}>{label}</label>}
      <input
        id={label ? input.name : null}
        className={inputClassNames}
        {...input}
        {...otherProps}
      />
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  otherProps: PropTypes.object,
  size: PropTypes.string,
};

Input.defaultProps = {
  size: 'medium'
};

export default React.memo(Input);