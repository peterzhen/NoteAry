import { connect } from 'react-redux';
import UpdateNotebookPrompt from './update_notebook_prompt';
import { updateNotebook } from '../../../actions/notebook_actions';

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    notebook: ownProps.notebook,
    closeModal: ownProps.closeModal,
    updateNotebook: notebook => dispatch(updateNotebook(notebook))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateNotebookPrompt);
