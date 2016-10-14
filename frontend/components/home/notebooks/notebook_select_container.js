import { connect } from 'react-redux';
import NotebookSelect from './notebook_select';
import { updateNote, requestNotes } from '../../../actions/note_actions';
import { requestNotebooks } from '../../../actions/notebook_actions';

const mapStateToProps = state => ({
  currentNote: state.notes.currentNote,
  notebooks: state.notebooks.notebooks
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    updateNote: note => dispatch(updateNote(note)),
    requestNotes: () => dispatch(requestNotes()),
    requestNotebooks: () => dispatch(requestNotebooks())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSelect);
