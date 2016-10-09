import React from 'react';

class NoteListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectNote = this.handleSelectNote.bind(this);
  }

  handleSelectNote(){
    if (this.props.currentNote){
      if (this.props.note.id !== this.props.currentNote.id){
        this.props.switchNote(this.props.note);
      }
    }
  }

  handleDelete(){
    this.props.destroyNote(this.props.note);
    this.props.switchNote(null);
  }

  render() {
    let selected = "note-item-li"
    if (this.props.currentNote){
      if (this.props.note.id === this.props.currentNote.id) {
        selected += " selected";
      }
    }
    return (
      <li className={selected} onClick={this.handleSelectNote}>
        <div className="note-item-title">
          {this.props.note.title}
          <button
            className="delete-note-button"
            onClick={this.handleDelete}></button>
        </div>

        <p className="note-item-body">
          {this.props.note.body}
        </p>
      </li>
    );
  }
};

export default NoteListItem;
