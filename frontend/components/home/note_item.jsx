import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="note-item-li">
        <h4 className="note-item-title">
          {this.props.note.title}
        </h4>

        <p className="note-item-body">
          {this.props.note.body}
        </p>

      </li>
    );
  }
};

export default NoteItem;
