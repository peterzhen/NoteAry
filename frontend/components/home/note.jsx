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
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'light',
      time: 1500,
      transition: 'fade'
    };

    this.editor;
    this.currentDelta = null;
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

  componentDidUpdate(){
    if (this.props.noteCount > 0){
      this.currentDelta = this.editor.getEditor().editor.delta;
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentNote){
      if (nextProps.currentNote.id !== this.state.id){
        if (this.props.currentNote && this.props.notebooks.length > 0){
          this.clearTimer();
          if (this.props.currentNote.title !== this.state.title
            || this.editor.getEditor().editor.delta !== this.currentDelta){
            this.handleSave();
          }
        }
        this.currentDelta = null;
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
    if ( this.props.currentNote.title !== this.state.title ||
         this.editor.getEditor().editor.delta !== this.currentDelta ){
      this.clearTimer();
      this.currentDelta = this.editor.getEditor().editor.delta;
      this.props.updateNote(this.state);
      this.msg.success('saved');
    }
  }

  clearTimer(){
    clearTimeout(this.saveTimer);
    this.saveTimer = null;
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
    this.clearTimer();
    this.props.updateNote(this.state);
    this.msg.success('saved');
  }

  handleDelete(e){
    this.props.destroyNote(this.props.currentNote);
    this.msg.error('deleted');
    this.props.switchNote(null);
    this.closeDeleteModal();
  }

  handleTitleChange(e) {
    this.clearTimer();
    this.setState({ title: e.currentTarget.value });
    this.saveTimer = setTimeout( this.autoSave, 1000);
  }

  handleBodyChange(content, delta) {
    this.clearTimer();
    if (this.currentDelta === null){
      this.currentDelta = delta;
    } else {
      if (this.currentDelta !== delta){
        this.setState({ body: content });
        this.currentDelta = delta;
        this.saveTimer = setTimeout( this.autoSave, 1000);
      }
    }
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
          { this.renderUser() }
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
              ref={editor => { this.editor = editor; }}
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
