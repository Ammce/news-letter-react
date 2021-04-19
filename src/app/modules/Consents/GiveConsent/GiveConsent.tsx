import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

  const handleChangeEmailOrName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.persist();
    console.log(e.target.name);
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
    console.log('Submitting the data', data);
  };

  const { name, email, checks } = data;
  return (
    <div>
      <form noValidate autoComplete='off'>
        <TextField
          value={name}
          id='name'
          label='Name'
          name='name'
          onChange={(e) => handleChangeEmailOrName(e)}
        />
        <TextField
          value={email}
          id='email'
          label='Email'
          name='email'
          type='email'
          onChange={(e) => handleChangeEmailOrName(e)}
        />
        <Checkbox
          checked={checks.recieveNewsLeters}
          name='recieveNewsLeters'
          label='Recieve newsletter'
          onChange={(e) => {
            handleChangeCheckBox(e);
          }}
        />
        <Checkbox
          checked={checks.showTargetedAds}
          name='showTargetedAds'
          label='Be shown targeted ads'
          onChange={(e) => {
            handleChangeCheckBox(e);
          }}
        />
        <Checkbox
          checked={checks.visitStatistics}
          name='visitStatistics'
          label='Contribute to anonymous visit statistics'
          onChange={(e) => {
            handleChangeCheckBox(e);
          }}
        />
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
