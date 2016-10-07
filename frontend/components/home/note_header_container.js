import { connect } from 'react-redux';
import NoteHeader from './note_header';
import { updateNote } from '../../actions/note_actions';

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(NoteHeader);
