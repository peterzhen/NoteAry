import React from 'react';
import NotesListContainer from './notes_list_container';

class Index extends React.Component {
  componentWillMount(){
    this.props.requestNotes();
    this.props.requestNotebooks();
  }

  render(){
    const noteCount = this.props.notes.length;
    let indexTitle = "ALL NOTES";
    let notes = this.props.notes;
    if (this.props.currentNotebook){
      indexTitle = this.props.currentNotebook.title;
      notes = notes.filter( note => note.notebook_id === this.props.currentNotebook.id )
    }
    
    return(
      <div className="index-container">
        <div className="index-header">
          <div className="index-container-title">{ indexTitle }</div>
          <div className="notes-count">{`${noteCount} notes`}</div>
        </div>

        <div className="notes-index-list">
          <NotesListContainer
            notes={ notes }
            currentUser={this.props.user}/>
        </div>
      </div>
    );
  }

}

export default Index;
