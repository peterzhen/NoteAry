import { connect } from 'react-redux';
import NotesList from './notes_list';
import { destroyNote, switchNote } from '../../actions/note_actions';

const mapStateToProps = ( state, ownProps ) => {
  const sortedNotes = state.notes.notes.sort( (a,b) => {
    let aDate = new Date(a.updated_at);
    let bDate = new Date(b.updated_at);
    return bDate - aDate;
  });
  return ({
    currentNote: state.notes.currentNote,
    notes: ownProps.notes
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
