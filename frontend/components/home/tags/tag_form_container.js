import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag, destroyTag, destroyTagging, requestNotesTags } from '../../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    tags: state.tags.currentNotesTags
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    createTag: (tag, note_id) => dispatch(createTag(tag, note_id)),
    destroyTag: (tag) => dispatch(destroyTag(tag)),
    destroyTagging: (tag, note_id) => dispatch(destroyTagging(tag, note_id)),
    requestNotesTags: (note) => dispatch(requestNotesTags(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
