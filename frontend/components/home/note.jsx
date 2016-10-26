import React from 'react';
import ReactQuill from 'react-quill';
import AlertContainer from 'react-alert';
import Modal from 'react-modal';
import TagFormContainer from './tags/tag_form_container';
import NotebookSelectContainer from './notebooks/notebook_select_container';
import DeleteNotePrompt from './delete_note_prompt';
import { DeleteModalStyle } from '../modal_styles/delete_modal_style';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentNote || {
      id: 0,
      title: "",
      body: ""
    }

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'light',
      time: 1500,
      transition: 'fade'
    };
    this.saveTimer;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.autoSave = this.autoSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentNote){
      if (nextProps.currentNote.id !== this.state.id){
        if (this.props.currentNote && this.props.notebooks.length > 0){
          if (this.props.currentNote.title !== this.state.title || this.props.currentNote.body !== this.state.body){
            clearTimeout(this.saveTimer);
            this.handleSave();
          }
        }
        this.setState(nextProps.currentNote);
        this.props.requestNotesTags(nextProps.currentNote);
      }
    }
  }

  openDeleteModal(e) {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    this.setState({ deleteModalOpen: false });
  }

  autoSave(){
    const oldTitle = this.props.currentNote.title;
    const oldBody = this.props.currentNote.body;
    const newTitle = this.state.title;
    const newBody = this.state.body;
    if ( oldTitle !== newTitle || oldBody !== newBody ){
      clearTimeout(this.saveTimer);
      this.props.updateNote(this.state);
      this.msg.success('saved');
    }
  }

  handleAlert(type, alert){
    if (type === "success"){
      this.msg.success(alert);
    } else if (type === "error"){
      this.msg.error(alert);
    } else {
      this.msg.info(alert);
    }
  }

  handleSave(e){
    clearTimeout(this.saveTimer);
    this.props.updateNote(this.state);
    this.msg.success('saved');
  }

  handleDelete(e){
    this.props.destroyNote(this.props.currentNote);
    this.msg.error('deleted');
    this.props.switchNote(null);
    this.closeDeleteModal()
  }

  handleTitleChange(e) {
    clearTimeout(this.saveTimer);
    this.setState({ title: e.currentTarget.value })
    this.saveTimer = setTimeout( this.autoSave, 3000);
  }

  handleBodyChange(text) {
    clearTimeout(this.saveTimer);
    this.setState({ body: text })
    this.saveTimer = setTimeout( this.autoSave, 3000);
  }

  renderUser(){
    if (this.props.currentUser){
      return(
        <div className="current-user-info">LOGGED IN AS: { this.props.currentUser.username }</div>
      );
    }
  }

  render() {
    if(this.props.noteCount === 0) {
      return (
        <div className="note-container-empty">
          <img src={window.notearyAssets.loadingNotebook}></img>
        </div>
      );
    } else {
      return(
        <div className='note-container'>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          { this.renderUser() }
          <div className="note-header-container">
            <input
              className="note-title-form"
              type='text'
              placeholder='Title your note'
              onChange ={this.handleTitleChange}
              value={this.state.title} />
          </div>

          <div className="note-tools-container">
            <div className="form-save-container">
              <button
                className="form-save-button"
                onClick={ this.handleSave }></button>
              <div className="save-tool-tooltip">SAVE</div>
            </div>

            <div className="form-delete-container">
              <button
                className="form-delete-button"
                onClick={ this.openDeleteModal }></button>
              <div className="delete-tool-tooltip">DELETE</div>
            </div>

            <div className="form-notebooks-container">
              <div className="form-notebooks-button"></div>
              <div className="notebooks-tool-tooltip">NOTEBOOKS</div>
            </div>

            <NotebookSelectContainer
              alert={ this.handleAlert }/>

            <div className="form-tags-container">
              <div className="form-tags-button"></div>
              <div className="tags-tool-tooltip">TAGS</div>
            </div>

            <TagFormContainer
              note={ this.props.currentNote }
              alert={ this.handleAlert }/>
          </div>

          <div className="note-form-container">
            <ReactQuill
              ref='editor'
              theme='snow'
              value={this.state.body}
              onChange={this.handleBodyChange}
              getText={this.getText}></ReactQuill>
          </div>

          <Modal
            isOpen={this.state.deleteModalOpen}
            onRequestClose={this.closeDeleteModal}
            style={ DeleteModalStyle }>

            <DeleteNotePrompt
              deleteNote={this.handleDelete}
              closeModal={this.closeDeleteModal}/>
          </Modal>

        </div>
      );
    }
  }
}

export default Note;
