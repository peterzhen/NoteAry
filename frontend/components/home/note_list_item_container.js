import { connect } from 'react-redux';
import NoteListItem from './note_list_item';
import { destroyNote } from '../../actions/note_actions';

const mapDispatchToProps = dispatch => {
  return ({
    destroyNote: (note) => dispatch(destroyNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(NoteListItem);
