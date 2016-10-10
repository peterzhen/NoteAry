import { connect } from 'react-redux';
import NotebookListItem from './notebook_list_item';
import { destroyNotebook, switchNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = state => {
  return ({
    currentNotebook: state.notebooks.currentNotebook
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    destroyNotebook: notebook => dispatch(destroyNotebook(notebook)),
    switchNotebook: notebook => dispatch(switchNotebook(notebook))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookListItem);
