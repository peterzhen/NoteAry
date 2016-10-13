import React from 'react';
import Modal from 'react-modal';
import { DeleteModalStyle } from '../../modal_styles/delete_modal_style';

class TagsListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deleteModalOpen: false
    }

    this.handleSelectTag = this.handleSelectTag.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    this.setState({ deleteModalOpen: false });
  }

  handleSelectTag(e){

  }

  render(){
    return(
      <li className="tag-item-li" onClick={ this.handeSelectTag }>
        <div className="tag-item-container">
          <div className="tag-item-name">{ this.props.tag.name }</div>

          <button className="tag-item-delete-button"/>
        </div>
      </li>
    );
  }
}

export default TagsListItem;
