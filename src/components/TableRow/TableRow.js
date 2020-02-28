import React from 'react';
import './TableRow.css';

const TableRow = ({ profileValues = [] }) =>
  <tr>
    {
      profileValues.map((value, i) =>
        <td key={i}>{value}</td>
      )
    }
  </tr>

export default TableRow;