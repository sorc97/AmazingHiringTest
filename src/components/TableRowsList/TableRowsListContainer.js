import { connect } from 'react-redux';
import TableRowsList from './TableRowsList';
import profiles from '../../data/profiles.json';

const mapStateToProps = ({ 
  sort: { currentField: sortField, value: sortValue } 
}) => {

  let profilesClone = [...profiles];

  if(sortField) {
    let sortFunc = (a, b) => (a[sortField].toLowerCase() > b[sortField].toLowerCase()) ? 1: -1;

    if(sortValue === 'high') {
      sortFunc = (a, b) => (a[sortField].toLowerCase() < b[sortField].toLowerCase()) ? 1: -1;
    }

    profilesClone.sort(sortFunc)
  }

  const profilesList = profilesClone.map(
    item => Object.values(item)
  )

  return {
    profilesList
  }
}


export default connect(mapStateToProps)(TableRowsList);