import React from 'react';
import NotesListContainer from './notes_list_container';

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
          <div className="index-container-title">NOTES</div>
          <div className="notes-count">{`${noteCount} notes`}</div>
        </div>

        <div className="notes-index-list">
          <NotesListContainer
            notes={this.props.notes}
            currentUser={this.props.user}/>
        </div>
      </div>
    );
  }

}

export default Index;
