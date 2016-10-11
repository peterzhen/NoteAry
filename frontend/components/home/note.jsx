import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: ""
    }
    this.saveTimer;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentNote){
      if (nextProps.currentNote.id !== this.state.id){
        if (this.props.currentNote) this.handleSave();
        this.setState(nextProps.currentNote);
      }
    }
  }

  handleSave(e){
    this.props.updateNote(this.state);
  }

  handleTitleChange(e) {
    clearTimeout(this.saveTimer);
    this.setState({ title: e.currentTarget.value })
    this.saveTimer = setTimeout( this.handleSave, 2000);
  }

  handleBodyChange(text) {
    clearTimeout(this.saveTimer);
    this.setState({ body: text })
    this.saveTimer = setTimeout( this.handleSave, 2000);
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
          <div className="note-header-container">
            <input
              className="note-title-form"
              type='text'
              placeholder='Title your note'
              onChange ={this.handleTitleChange}
              value={this.state.title} />
            <div className="form-save-container">
              <button
                className="form-save-button"
                onClick={ this.handleSave }></button>
              <div className="save-button-tooltip">SAVE</div>
            </div>
          </div>

          <div className="note-form-container">
            <ReactQuill
              ref='editor'
              theme='snow'
              value={this.state.body}
              onChange={this.handleBodyChange}
              getText={this.getText}></ReactQuill>
          </div>
        </div>
      );
    }
  }
}

export default Note;
