import { connect } from 'react-redux';
import ErrorMessage from './ErrorMessage';

const mapStateToProps = state => {
  const { message, status } = state.chuckFacts.error || {};
  return {
    message,
    status,
  };
};

export default connect(mapStateToProps)(ErrorMessage);
