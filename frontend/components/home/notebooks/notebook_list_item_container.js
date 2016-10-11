import { connect } from 'react-redux';
import NotebookListItem from './notebook_list_item';
import { destroyNotebook, switchNotebook, createNotebook } from '../../../actions/notebook_actions';
import { requestNotes } from '../../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    currentNotebook: state.notebooks.currentNotebook,
    notes: state.notes.notes
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    destroyNotebook: notebook => dispatch(destroyNotebook(notebook)),
    switchNotebook: notebook => dispatch(switchNotebook(notebook)),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    requestNotes: () => dispatch(requestNotes())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookListItem);
