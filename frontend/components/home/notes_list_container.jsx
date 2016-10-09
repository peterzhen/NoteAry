import { connect } from 'react-redux';
import NotesList from './notes_list';
import { destroyNote, switchNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    notes: state.notes.notes
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    switchNote: note => dispatch(switchNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);
