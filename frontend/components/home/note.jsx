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
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentNote){
      if (nextProps.currentNote.id !== this.state.id){
        this.setState(nextProps.currentNote);
      }
    }
  }

  handleSave(e){
    e.preventDefault();
    this.props.updateNote(this.state);
  }

  handleTitleChange(e) {
    this.setState({ title: e.currentTarget.value })
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
            <form className="note-title-form" onSubmit={ this.handleSave }>
              <input
                className="note-title-form"
                type='text'
                placeholder='Title your note'
                onChange ={this.handleTitleChange}
                value={this.state.title} />
              <input type='submit' className="note-save-button"></input>
            </form>
          </div>

          <div className="note-form-container">
            <ReactQuill
              ref='editor'
              theme='snow'
              value={this.state.body}></ReactQuill>
          </div>
        </div>
      );
    }
  }
}

export default Note;
