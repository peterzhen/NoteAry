import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", notebook_id: 1};
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {

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

export default Note;
