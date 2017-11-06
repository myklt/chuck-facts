import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { searchFacts } from './actions';

const mapStateToProps = state => ({
  isLoading: state.chuckFacts.isLoading,
});

export default connect(mapStateToProps, { search: searchFacts })(SearchInput);
