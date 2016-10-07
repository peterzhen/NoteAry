import { connect } from 'react-redux';
import NotesList from './notes_list';
import { destroyNote } from '../../actions/note_actions';

const mapDispatchToProps = dispatch => {
  return ({
    destroyNote: (note) => dispatch(destroyNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(NotesList);
