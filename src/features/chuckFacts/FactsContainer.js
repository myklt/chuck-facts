import { connect } from 'react-redux';
import Facts from './Facts';

const mapStateToProps = state => ({
  facts: state.chuckFacts.data,
});

export default connect(mapStateToProps)(Facts);
