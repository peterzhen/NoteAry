import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestNotes } from '../../actions/note_actions';
import { requestNotebooks } from '../../actions/notebook_actions';
import Home from './home';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestNotes: () => dispatch(requestNotes()),
  requestNotebooks: () => dispatch(requestNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
