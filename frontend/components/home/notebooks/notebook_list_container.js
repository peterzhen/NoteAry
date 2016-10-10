import { connect } from 'react-redux';
import NotebooksList from './notebooks_list';
import { destroyNotebook, switchNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = state => {
  const sortedNotebooks = state.notebooks.notebooks.sort( (a,b) => {
    let aDate = new Date(a.updated_at);
    let bDate = new Date(b.updated_at);
    return bDate - aDate;
  });
  return ({
    currentNotebook: state.notebooks.currentNotebook,
    notebooks: sortedNotebooks
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    switchNotebook: notebook => dispatch(switchNotebook(notebook)),
    closeNotebookDrawer: ownProps.closeNotebookDrawer
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksList);
