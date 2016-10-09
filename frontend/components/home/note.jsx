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
    } else {
      this.setState({});
    }
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (this.state.title){
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
    } else if (this.props.noteCount === 0){
      return (
        <div>
          <h1>You have no notes! Please add a new note by simply clicking the plus button on the left side bar</h1>
        </div>
      );
    }else {
      return (
        <noscript></noscript>
      );
    }
  }
}

export default Note;
