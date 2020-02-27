import React from 'react';

const TableRow = ({ profileValues = [] }) =>
  <tr>
    {
      profileValues.map((value, i) =>
        <td key={i}>{value}</td>
      )
    }
  </tr>

export default TableRow;