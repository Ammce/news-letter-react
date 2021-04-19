import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

import { DatagridConfig, DatagridRows } from '../types';

export interface IDataGridProps {
  columns: DatagridConfig[];
  rows: DatagridRows[];
}

const Datagrid: React.FC<IDataGridProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </div>
  );
};

Datagrid.propTypes = {
  columns: PropTypes.arrayOf<any>(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  ).isRequired,
  rows: PropTypes.arrayOf<any>(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  ).isRequired,
};

Datagrid.defaultProps = {};

export default Datagrid;
