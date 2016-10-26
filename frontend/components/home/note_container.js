import { connect } from 'react-redux';
import { updateNote, destroyNote, switchNote } from '../../actions/note_actions';
import { requestNotesTags } from '../../actions/tag_actions';
import Note from './note';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    noteCount: state.notes.notes.length,
    notebooks: state.notebooks.notebooks,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note)),
    destroyNote: (note) => dispatch(destroyNote(note)),
    switchNote: (note) => dispatch(switchNote(note)),
    requestNotesTags: (note) => dispatch(requestNotesTags(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
