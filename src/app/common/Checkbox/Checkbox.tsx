import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxMaterialUI from '@material-ui/core/Checkbox';
import { CheckboxColors } from '../types';

export interface ICheckboxProps {
  checked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  color?: CheckboxColors;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  onChange,
  name,
  checked,
  label,
  color = 'primary',
}) => {
  return (
    <FormControlLabel
      control={
        <CheckboxMaterialUI
          checked={checked}
          onChange={onChange}
          name={name}
          color={color}
        />
      }
      label={label}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf<CheckboxColors>(['primary', 'secondary', 'default']),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  color: 'primary',
};

export default Checkbox;
