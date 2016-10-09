import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentNote){
      this.setState(nextProps.currentNote);
    }
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
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
              onChange ={this.handleChange('title')}
              value={this.state.title} />

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
