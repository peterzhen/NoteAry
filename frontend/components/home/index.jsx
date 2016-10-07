import React from 'react';
import NotesList from './notes_list';

class Index extends React.Component {
  componentWillMount(){
    this.props.requestNotes();
    this.props.requestNotebooks();
  }

  render(){
    const noteCount = this.props.notes.length;
    // const notebooks = this.props.notebooks.map((notebook) => (
    //   <li>{notebook.title}</li>
    // ));

    return(
      <div className="index-container">
        <div className="index-header">
          <h4>Notes</h4>
          <h4>{`${noteCount} Notes`}</h4>
        </div>

        <div className="notes-index-list">
          <NotesList
            notes={this.props.notes}
            currentUser={this.props.user}/>
        </div>
      </div>
    );
  }

}

export default Index;
