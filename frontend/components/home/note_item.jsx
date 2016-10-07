import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.destroyNote(this.props.note);
  }

  render() {
    return (
      <li className="note-item-li">
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

export default NoteItem;
