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
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  onChange,
  value,
  id,
  name,
  type,
}) => {
  return (
    <TextFieldMaterialUI
      onChange={onChange}
      name={name}
      value={value}
      label={label}
      id={id}
      type={type}
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
};

TextField.defaultProps = {
  type: 'string',
};

export default TextField;
