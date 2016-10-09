import { connect } from 'react-redux';
import NoteListItem from './note_list_item';
import { destroyNote, switchNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    destroyNote: note => dispatch(destroyNote(note)),
    switchNote: note => dispatch(switchNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListItem);
