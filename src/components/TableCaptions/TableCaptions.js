import React from 'react';
import './TableCaptions.css';

const TableCaption = ({
  currentCaptions = [],
  onChangeSort = f => f,
  sortValue = "",
  sortField = ""
}) =>
  <thead>
    <tr>
      {
        currentCaptions.map((item, i) =>
          <th
            key={i}
            onClick={() => onChangeSort(item)}
            className={
              (sortField === item) ? ` caption sort-${sortValue}` : 'caption'
            }
          >
            {item}
          </th>
        )
      }
    </tr>
  </thead>

export default TableCaption;