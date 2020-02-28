import { connect } from 'react-redux';
import TableRowsList from './TableRowsList';
import profiles from '../../data/profiles.json';

const mapStateToProps = ({ 
  sort: { currentField: sortField, value: sortValue } 
}) => {

  let profilesArr = [...profiles];  //Create profiles clone

  if(sortField) {
    // Choose sort function
    let sortFunc = (a, b) => (a[sortField].toLowerCase() > b[sortField].toLowerCase()) ? 1: -1;

    if(sortValue === 'high') {
      sortFunc = (a, b) => (a[sortField].toLowerCase() < b[sortField].toLowerCase()) ? 1: -1;
    }

    profilesArr.sort(sortFunc);  // Sort profiles by current sort function
  }

  const profilesList = profilesArr.map(  // Get profiles data without captions
    item => Object.values(item)
  )

  return {
    profilesList
  }
}

export default connect(mapStateToProps)(TableRowsList);