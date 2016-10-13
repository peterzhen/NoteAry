import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag, destroyTag } from '../../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    tags: state.tags.currentNotesTags
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    createTag: (tag, note_id) => dispatch(createTag(tag, note_id)),
    destroyTag: (tag) => dispatch(destroyTag(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
