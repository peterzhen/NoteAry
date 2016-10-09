import React from 'react';
import NoteListItemContainer from './note_list_item_container';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if ( !this.props.currentNote && nextProps.notes.length > 0){
      this.props.switchNote(nextProps.notes[0]);
    }
  }

  renderNotes() {
    return(
      <ul className="note-item-ul">
        {this.props.notes.map((note, idx) => (
          <NoteListItemContainer key={`note-${idx}`} note={note}/>
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
