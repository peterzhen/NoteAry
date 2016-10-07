import { connect } from 'react-redux';
import Note from './note';

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(Note);
