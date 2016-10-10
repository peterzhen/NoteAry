import React from 'react';
import Moment from 'moment';
import Modal from 'react-modal';
import DeleteNotePrompt from '../delete_note_prompt';
import { DeleteModalStyle } from '../../modal_styles/delete_modal_style';

class NotebookListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteModalOpen: false }
    this.deleted = false;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  handleSelectNotebook(){
    if (this.props.currentNotebook && this.deleted === false){
      if (this.props.notebook.id !== this.props.currentNotebook.id){
        this.props.switchNotebook(this.props.notebook);
      }
    }
  }

  handleDelete(){
    this.deleted = true;
    this.props.destroyNotebook(this.props.notebook);
    if (this.props.notebook.id === this.props.currentNotebook.id){
      this.props.switchNotebook(null);
    }
    this.closeDeleteModal()
  }

  render() {
    let selected = "notebook-item-li"
    if (this.props.currentNotebook){
      if (this.props.notebook.id === this.props.currentNotebook.id) {
        selected += " selected";
      }
    }

    return (
      <li className={ selected } onClick={this.handleSelectNotebook}>
        <div className="notebook-item-title">
          {this.props.notebook.title}
          <button
            className="delete-notebook-button"
            onClick={this.openDeleteModal}></button>
        </div>
        <div className='last-updated'>
          { Moment(this.props.notebook.updated_at).fromNow() }
        </div>
        <div className="notebook-item-body">
        </div>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          style={ DeleteModalStyle }>

          <DeleteNotePrompt
            deleteNote={this.handleDelete}
            closeModal={this.closeDeleteModal}/>
        </Modal>

      </li>
    );
  }
};

export default NotebookListItem;
