import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMaterialUI from '@material-ui/core/TextField';

export interface ITextFieldProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  value: string;
  name: string;
  type?: string;
  className?: string;
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  onChange,
  value,
  id,
  name,
  type,
  className,
}) => {
  return (
    <TextFieldMaterialUI
      onChange={onChange}
      name={name}
      value={value}
      label={label}
      id={id}
      type={type}
      className={className}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextField.defaultProps = {
  type: 'string',
  className: '',
};

export default TextField;
