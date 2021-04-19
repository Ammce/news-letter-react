import React from 'react';
import PropTypes from 'prop-types';
import { Datagrid } from '../../../common';

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

const rows = [
  {
    id: '1',
    name: 'Amel',
    email: 'amcenp@gmail.com',
    recieveNewsLeters: 'Yes',
    showTargetedAds: 'Yes',
    visitStatistics: 'Yes',
  },
];

const CollectedConsents: React.FC<ICollectedConsentsProps> = () => {
  return (
    <div>
      <Datagrid rows={rows} columns={columns} />
    </div>
  );
};

CollectedConsents.propTypes = {};

// CollectedConsents.defaultProps = {
// };

export default CollectedConsents;
