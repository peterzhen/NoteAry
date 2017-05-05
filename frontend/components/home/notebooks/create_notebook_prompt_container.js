import { connect } from 'react-redux';
import CreateNotebookPrompt from './create_notebook_prompt';
import { createNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = state => {
  return({
    notebooks: state.notebooks.notebooks
  });

};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    closeModal: ownProps.closeModal,
    createNotebook: notebook => dispatch(createNotebook(notebook))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNotebookPrompt);
