import React from 'react';
import Modal from 'react-modal'
import TagsListItemContainer from './tags_list_item_container';

class TagsList extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      tagsModalOpen: false
    };

    this.openTagsModal = this.openTagsModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);
  }

  openTagsModal() {
    this.setState({ tagsModalOpen: true });
  }

  closeTagsModal() {
    this.setState({ tagsModalOpen: false });
  }

  renderTags() {
    return(
      <div className="tags-index-list">
        {this.props.tags.map((tag, idx) => (
          <TagsListItemContainer
            key={`tag-${idx}`}
            tag={ tag }
            closeDrawer={ this.props.closeTagsDrawer } />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="drawer-index-container">
        <div className="drawer-index-header">
          <div className="drawer-index-title">TAGS</div>
          <div className="drawer-count">{`${this.props.tags.length} Tags`}</div>

          <div className="drawer-close-button-container">
            <button
              className="drawer-close-button"
              onClick={ this.props.closeTagsDrawer }/>
          </div>
        </div>

        { this.renderTags() }

      </div>
    );
  }
}

export default TagsList;
