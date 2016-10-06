import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SideBar from './side_bar';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
