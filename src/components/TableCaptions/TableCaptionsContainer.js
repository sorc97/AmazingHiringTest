import { connect } from 'react-redux';
import profiles from '../../data/profiles.json';
import TableCaptions from './TableCaptions';
import { changeSort } from '../../actions/sortActions';

const mapStateToProps = state => {
  const parsedProfiles = profiles;
  const currentCaptions = new Set();

  parsedProfiles.forEach(profile => {
    Object.keys(profile).forEach(
      caption => currentCaptions.add(caption)
    );
  });

  return {
    currentCaptions: [...currentCaptions]
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