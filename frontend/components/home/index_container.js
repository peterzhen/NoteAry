import { connect } from 'react-redux';
import Index from './index';
import { requestNotes } from '../../actions/note_actions';
import { requestNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return ({
    user: state.session.currentUser,
    notes: state.notes.notes,
    notebooks: state.notebooks.notebooks,
    currentNotebook: state.notebooks.currentNotebook,
    taggedNotes: state.notes.taggedNotes,
    currentTag: state.tags.currentTag
  });
};

export default connect(
  mapStateToProps,
  null
)(Index);
