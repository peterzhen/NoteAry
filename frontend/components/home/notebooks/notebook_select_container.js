import { connect } from 'react-redux';
import NotebookSelect from './notebook_select';
import { updateNote } from '../../../actions/note_actions';

const mapStateToProps = state => ({
  currentNote: state.notes.currentNote,
  notebooks: state.notebooks.notebooks
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    updateNote: note => dispatch(updateNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSelect);
