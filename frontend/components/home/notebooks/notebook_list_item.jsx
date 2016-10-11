import React from 'react';
import Moment from 'moment';
import Modal from 'react-modal';
import DeleteNotebookPrompt from './delete_notebook_prompt';
import UpdateNotebookPromptContainer from './update_notebook_prompt_container';
import { DeleteModalStyle } from '../../modal_styles/delete_modal_style';
import { NotebookFormModalStyle } from '../../modal_styles/create_notebook_modal_style';

class NotebookListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false,
      updateModalOpen: false
     }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  openDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    this.setState({ deleteModalOpen: false });
  }

  openUpdateModal(e) {
    e.stopPropagation();
    this.setState({ updateModalOpen: true });
  }

  closeUpdateModal(e) {
    this.setState({ updateModalOpen: false });
  }

  handleSelectNotebook(e){
    if (!this.props.currentNotebook){
      this.props.switchNotebook(this.props.notebook);
      this.props.closeDrawer();
    }else if(this.props.notebook.id !== this.props.currentNotebook.id){
      this.props.switchNotebook(this.props.notebook);
      this.props.closeDrawer();
    }
  }

  handleDelete(e){
    if (this.props.currentNotebook){
      if (this.props.notebook.id === this.props.currentNotebook.id){
        this.props.switchNotebook(null);
      }
    }
    let notes = this.props.notes.filter( note => note.notebook_id === this.props.notebook.id );
    notes.map( note => {
      if ( note.id === this.props.currentNote.id ){
        this.props.switchNote(null);
      }
    });
    this.props.destroyNotebook(this.props.notebook);
    this.props.requestNotes();
    this.closeDeleteModal()
  }

  renderNoteCount(){
    let notes = this.props.notes.filter( note => note.notebook_id === this.props.notebook.id );
    const noteCount = notes.length;
    return `${ noteCount } Notes`;
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

        <div className="notebook-item-title-container">
          <div className="notebook-item-title">
            { this.props.notebook.title }
          </div>

          <button
            className="edit-notebook-button"
            onClick={this.openUpdateModal}></button>

          <button
            className="delete-notebook-button"
            onClick={this.openDeleteModal}></button>
        </div>

        <div className='notebook-note-count'>
          { this.renderNoteCount() }
        </div>

        <div className="notebook-item-description">
          { this.props.notebook.description }
        </div>

        <Modal
          isOpen={ this.state.deleteModalOpen }
          onRequestClose={ this.closeDeleteModal }
          style={ DeleteModalStyle }>

          <DeleteNotebookPrompt
            deleteNotebook={ this.handleDelete }
            closeModal={ this.closeDeleteModal }/>
        </Modal>

        <Modal
          isOpen={ this.state.updateModalOpen }
          onRequestClose={ this.closeUpdateModal }
          style={ NotebookFormModalStyle }>

          <UpdateNotebookPromptContainer
            notebook={ this.props.notebook }
            updateNotebook={ this.handleUpdate }
            closeModal={ this.closeUpdateModal }/>
        </Modal>

      </li>
    );
  }
};

export default NotebookListItem;
