import { connect } from 'react-redux';
import NoteForm from './note_form';
import { updateNote } from '../../actions/note_actions';

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);
