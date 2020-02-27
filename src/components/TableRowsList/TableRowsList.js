import React from 'react';
import TableRow from '../TableRow/TableRow';

const TableRowsList = ({ profilesList = [] }) =>
  <tbody>
    {
      profilesList.map(
        (profile, i) => 
          <TableRow key={i} profileValues={profile} />
      )
    }
  </tbody>

export default TableRowsList;