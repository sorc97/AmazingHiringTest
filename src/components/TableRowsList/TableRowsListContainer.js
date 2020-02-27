import {connect} from 'react-redux';
import TableRowsList from './TableRowsList';
import profiles from '../../data/profiles.json';

const mapStateToProps = ( { sort } ) => {
/* 
  if(sort) {
    const 
  } */

  const profilesList = profiles.map(
    item => Object.values(item) 
  )

  console.log(profilesList);

  return {
    profilesList
  }
}


export default connect(mapStateToProps)(TableRowsList);