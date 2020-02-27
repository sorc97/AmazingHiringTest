import React from 'react';
import './TableCaptions.css';

const TableCaption = ({ 
  currentCaptions = [], onChangeSort = f => f 
}) =>
  <thead>
    <tr>
      {
        currentCaptions.map((item, i) =>
          <th 
            key={i}
            onClick={() => onChangeSort(item)}
          >
              {item}
          </th>
        )
      }
    </tr>
  </thead>

export default TableCaption;