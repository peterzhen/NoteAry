import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote, requestNotes, switchNote } from '../../actions/note_actions';
import SideBar from './side_bar';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser,
    notes: state.notes.notes
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    requestNotes: () => dispatch(requestNotes()),
    requestNotebooks: () => dispatch(requestNotebooks()),
    switchNote: note => dispatch(switchNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
