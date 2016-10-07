import React from 'react';
import NoteItem from './note_item';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const noteItems = this.props.notes.map((note, idx) => (
      <NoteItem key={`note-${idx}`} note={note}/>
    ));

    return (
      <ul>
        { noteItems }
      </ul>
    );
  }
};

export default NotesList;
