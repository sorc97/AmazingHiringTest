import React from 'react';
import TableCaptionsContainer from '../TableCaptions/TableCaptionsContainer';
import TableRowsListContainer from '../TableRowsList/TableRowsListContainer';
import './ProfilesTable.css';

const ProfilesTable = () =>
  <table>
    <TableCaptionsContainer />
    <TableRowsListContainer />
  </table>

export default ProfilesTable;