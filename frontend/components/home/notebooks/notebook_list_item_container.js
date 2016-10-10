import { connect } from 'react-redux';
import NotebookListItem from './notebook_list_item';
import { destroyNotebook, switchNotebook, createNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = state => {
  return ({
    currentNotebook: state.notebooks.currentNotebook
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    destroyNotebook: notebook => dispatch(destroyNotebook(notebook)),
    switchNotebook: notebook => dispatch(switchNotebook(notebook)),
    createNotebook: notebook => dispatch(createNotebook(notebook))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookListItem);
