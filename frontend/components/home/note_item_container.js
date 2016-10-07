import { connect } from 'react-redux';
import NoteItem from './note_item';
import { destroyNote } from '../../actions/note_actions';

const mapDispatchToProps = dispatch => {
  return ({
    destroyNote: (note) => dispatch(destroyNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(NoteItem);
