import React from 'react';
import NoteItemContainer from './note_item_container';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  // handleDelete(note){
  //   this.props.destroyNote(note);
  // onClick={ note => this.handleDelete(note) }
  // }

  renderNotes() {
    return(
      <ul className="note-item-ul">
        {this.props.notes.map((note, idx) => (
          <NoteItemContainer key={`note-${idx}`} note={note}/>
        ))}
      </ul>
    );
	}

  render() {
    return (
      <div>
        { this.renderNotes() }
      </div>
    );
  }
};

export default NotesList;
