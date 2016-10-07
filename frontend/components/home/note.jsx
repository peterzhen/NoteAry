import React from 'react';
import NoteHeaderContainer from './note_header_container';
import NoteFormContainer from './note_form_container';

class Note extends React.Component {

  render(){
    return(
      <div className="note-container">
        <NoteHeaderContainer/>
        <NoteFormContainer/>
      </div>
    );
  }
}

export default Note;
