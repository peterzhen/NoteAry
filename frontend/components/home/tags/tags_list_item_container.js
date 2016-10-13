import { connect } from 'react-redux';
import TagsListItem from './tags_list_item';
import { requestTaggedNotes, switchNote } from '../../../actions/note_actions'
import { switchNotebook } from '../../../actions/notebook_actions'
import { switchTag } from '../../../actions/tag_actions'

const mapStateToProps = state => {
  return ({

  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    requestTaggedNotes: tag => dispatch(requestTaggedNotes(tag)),
    switchNote: note => dispatch(switchNote(note)),
    switchNotebook: notebook => dispatch(switchNotebook(notebook)),
    switchTag: tag => dispatch(switchTag(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsListItem);
