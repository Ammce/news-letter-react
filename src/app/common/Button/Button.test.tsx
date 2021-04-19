import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ButtonMaterialUI from '@material-ui/core/Button';

import Button, { IButtonProps } from './Button';

describe('Button', () => {
  const mockFunc = jest.fn();
  const props = {
    onClick: mockFunc,
    label: 'Submit button',
  };

  it('Should render without crashing', () => {
    const appWrapper = shallow<IButtonProps>(<Button {...props} />);
    expect(appWrapper).toBeTruthy();
  });

  it('Should click the button once', () => {
    const appWrapper = shallow<IButtonProps>(<Button {...props} />);
    const button = appWrapper.find(ButtonMaterialUI);
    button.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });

  it('Should add additional not required prop', () => {
    const appWrapper = shallow<IButtonProps>(
      <Button {...props} color='secondary' />,
    );
    expect(appWrapper.props().color).toBe('secondary');
  });
});
