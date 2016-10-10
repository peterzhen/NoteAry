import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import Note from './note';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    noteCount: state.notes.notes.length
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
