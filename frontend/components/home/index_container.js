import { connect } from 'react-redux';
import Index from './index';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
