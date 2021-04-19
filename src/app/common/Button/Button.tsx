import React from 'react';
import PropTypes from 'prop-types';
import ButtonMaterialUI from '@material-ui/core/Button';
import { ButtonColors } from '../types';

export interface IButtonProps {
  label: string;
  disabled?: boolean;
  color?: ButtonColors;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  color = 'primary',
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonMaterialUI
      disabled={disabled}
      variant='contained'
      color={color}
      onClick={onClick}
    >
      {label}
    </ButtonMaterialUI>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf<ButtonColors>([
    'primary',
    'secondary',
    'default',
    'inherit',
  ]),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
};

export default Button;
