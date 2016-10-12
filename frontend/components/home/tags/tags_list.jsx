import React from 'react';
import Modal from 'react-modal'

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

  render() {
    return (
      <div className="drawer-index-container">
        <div className="drawer-index-header">
          <div className="drawer-index-title">TAGS</div>
          <div className="drawer-count">{`${0} Tags`}</div>

          <div className="drawer-add-button-container">
            <button
              className="drawer-add-button"
              onClick={ this.openTagsModal }/>
          </div>

          <div className="drawer-close-button-container">
            <button
              className="drawer-close-button"
              onClick={ this.props.closeTagsDrawer }/>
          </div>
        </div>

      </div>
    );
  }
}

export default TagsList;
