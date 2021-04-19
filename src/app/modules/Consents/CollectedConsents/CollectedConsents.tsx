import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, DefaultRootState } from 'react-redux';

import { getConsents } from '../redux/Consents.actions';
import { Datagrid } from '../../../common';

import { AppState } from '../../../store';

export interface ICollectedConsentsProps {}

const columns = [
  { field: 'id', headerName: 'Id', width: 80 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 170 },
  { field: 'recieveNewsLeters', headerName: 'Recieve newsletter', width: 250 },
  { field: 'showTargetedAds', headerName: 'Be shown targeted ads', width: 250 },
  {
    field: 'visitStatistics',
    headerName: 'Contribute to anonymous visit statistics',
    width: 300,
  },
];

const CollectedConsents: React.FC<ICollectedConsentsProps> = () => {
  const dispatch = useDispatch();
  const consents = useSelector((state: AppState) => state.consents.consents);

  useEffect(() => {
    dispatch(getConsents);
  }, []);
  return (
    <div>
      <Datagrid rows={consents} columns={columns} />
    </div>
  );
};

CollectedConsents.propTypes = {};

// CollectedConsents.defaultProps = {
// };

export default CollectedConsents;
