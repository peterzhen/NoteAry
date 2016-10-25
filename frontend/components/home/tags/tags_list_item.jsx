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
    this.handleDelete = this.handleDelete.bind(this);
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

  selectTag(){
    this.props.requestTaggedNotes(this.props.tag);
    this.props.switchTag(this.props.tag);
    this.props.switchNotebook(null);
    this.props.closeDrawer();
  }

  handleSelectTag(e){
    if (!this.props.currentTag){
      this.selectTag();
    }else if(this.props.tag.id !== this.props.currentTag.id){
      this.selectTag();
    }
  }

  handleDelete(e){
    e.stopPropagation();
    this.props.destroyTag(this.props.tag.id);
    this.props.requestTags();
    this.props.requestNotesTags(this.props.currentNote);
    if (this.props.currentTag){
      if (this.props.currentTag.id === this.props.tag.id){
        this.props.switchTag(null);
        this.props.switchNotebook(null);
      }
    }
  }

  render(){
    return(
      <div className="tag-item-container" onClick={ this.handleSelectTag }>
        <div className="tag-item-name">{ this.props.tag.name }</div>

        <button
          className="tag-item-delete-button"
          onClick={ this.handleDelete }>x</button>
      </div>
    );
  }
}

export default TagsListItem;
