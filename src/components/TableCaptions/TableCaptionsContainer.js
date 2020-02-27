import { connect } from 'react-redux';
import profiles from '../../data/profiles.json';
import TableCaptions from './TableCaptions';
import { changeSort } from '../../actions/sortActions';

const mapStateToProps = ({
  sort: { currentField: sortField, value: sortValue } 
}) => {
  const parsedProfiles = profiles;
  const currentCaptions = new Set();

  parsedProfiles.forEach(profile => {
    Object.keys(profile).forEach(
      caption => currentCaptions.add(caption)
    );
  });

  return {
    currentCaptions: [...currentCaptions],
    sortField,
    sortValue
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeSort(field) {
    dispatch(changeSort(field));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableCaptions);