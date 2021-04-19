import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { giveConsent } from '../redux/Consents.actions';

import './GiveConsent.scss';

import { Button, TextField, Checkbox } from '../../../common/';

export interface IGiveConsentProps {}

const GiveConsent: React.FC<IGiveConsentProps> = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    checks: {
      recieveNewsLeters: false,
      showTargetedAds: false,
      visitStatistics: false,
    },
  });

  const dispatch = useDispatch();

  const handleChangeEmailOrName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleChangeCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.persist();
    setData({
      ...data,
      checks: {
        ...data.checks,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const onSubmit = () => {
    dispatch(giveConsent(data));
  };

  const { name, email, checks } = data;
  return (
    <div className='give-contest'>
      <form className='form-give-consent' noValidate autoComplete='off'>
        <div className='input-wrapper'>
          <TextField
            value={name}
            id='name'
            label='Name'
            name='name'
            className='input'
            onChange={(e) => handleChangeEmailOrName(e)}
          />
          <TextField
            value={email}
            id='email'
            label='Email'
            name='email'
            type='email'
            className='input'
            onChange={(e) => handleChangeEmailOrName(e)}
          />
        </div>
        <div className='information'>
          <Typography variant='body1' gutterBottom>
            I agree to:
          </Typography>
        </div>
        <div className='checkbox-wrapper'>
          <Checkbox
            checked={checks.recieveNewsLeters}
            name='recieveNewsLeters'
            label='Recieve newsletter'
            onChange={(e) => {
              handleChangeCheckBox(e);
            }}
            className='checkbox'
          />
          <Checkbox
            checked={checks.showTargetedAds}
            name='showTargetedAds'
            label='Be shown targeted ads'
            onChange={(e) => {
              handleChangeCheckBox(e);
            }}
            className='checkbox'
          />
          <Checkbox
            checked={checks.visitStatistics}
            name='visitStatistics'
            label='Contribute to anonymous visit statistics'
            onChange={(e) => {
              handleChangeCheckBox(e);
            }}
            className='checkbox'
          />
        </div>
        <Button
          disabled={
            !checks.recieveNewsLeters &&
            !checks.showTargetedAds &&
            !checks.visitStatistics
          }
          label='Give Consent'
          onClick={onSubmit}
        />
      </form>
    </div>
  );
};

GiveConsent.propTypes = {};

// GiveConsent.defaultProps = {
// };

export default GiveConsent;
