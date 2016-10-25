import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag,
         destroyTag,
         destroyTagging,
         requestNotesTags,
         requestTags } from '../../../actions/tag_actions';
import { requestTaggedNotes } from '../../../actions/note_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    tags: state.tags.currentNotesTags,
    selectedTag: state.tags.currentTag
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    createTag: (tag, note_id) => dispatch(createTag(tag, note_id)),
    destroyTag: (tag) => dispatch(destroyTag(tag)),
    destroyTagging: (tag, note_id) => dispatch(destroyTagging(tag, note_id)),
    requestNotesTags: (note) => dispatch(requestNotesTags(note)),
    requestTags: () => dispatch(requestTags()),
    requestTaggedNotes: (tag) => dispatch(requestTaggedNotes(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
