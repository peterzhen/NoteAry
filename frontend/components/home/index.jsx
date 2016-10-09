import React from 'react';
import NotesListContainer from './notes_list_container';

class Index extends React.Component {
  componentWillMount(){
    this.props.requestNotes();
    this.props.requestNotebooks();
  }

  render(){
    const noteCount = this.props.notes.length;

    return(
      <div className="index-container">
        <div className="index-header">
          <div className="index-container-title">ALL NOTES</div>
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
