import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote, requestNotes, switchNote } from '../../actions/note_actions';
import { switchNotebook, createNotebook } from '../../actions/notebook_actions';
import { switchTag } from '../../actions/tag_actions';
import SideBar from './side_bar';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser,
    currentNotebook: state.notebooks.currentNotebook,
    notes: state.notes.notes,
    notebooks: state.notebooks.notebooks
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    requestNotes: () => dispatch(requestNotes()),
    requestNotebooks: () => dispatch(requestNotebooks()),
    switchNote: note => dispatch(switchNote(note)),
    switchTag: tag => dispatch(switchTag(tag)),
    switchNotebook: notebook => dispatch(switchNotebook(notebook)),
    createNotebook: notebook => dispatch(createNotebook(notebook))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
