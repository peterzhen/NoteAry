import React from 'react';
import Dropdown from 'react-dropdown';
import merge from 'lodash/merge';

class NotebookSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = this.selectCurrentState();

    this.handleSelect = this.handleSelect.bind(this);
    this.mapNotebooks = this.mapNotebooks.bind(this);
    this.selectCurrentState = this.selectCurrentState.bind(this);
  }

  componentDidMount(){
    this.setState(this.selectCurrentState());
  }

  componentWillReceiveProps(nextProps){

    if (this.props.currentNote && nextProps.currentNote){
      if (nextProps.currentNote.id !== this.props.currentNote.id || this.props.currentNote === null){
        this.setState(this.selectCurrentState(nextProps.currentNote));
      }
    }
  }

  mapNotebooks(){
    let notebooks = this.props.notebooks.slice();
    notebooks.map( (notebook, idx) => {
      let notebookTitle = { label: notebook.title };
      notebooks[idx] = Object.assign({}, notebook, notebookTitle);
    });
    return notebooks;
  }

  selectCurrentState(nextCurrentNote){
    let currentNote = nextCurrentNote || this.props.currentNote;
    let notebooks = this.mapNotebooks();
    let currentNotebook = {};
    notebooks.map( (notebook) => {
      if (notebook.id === currentNote.notebook_id){
        currentNotebook = notebook;
      }
    });
    return currentNotebook;
  }

  //DOES NOT WORK FOR DUPLICATE NOTEBOOKS
  handleSelect(value){
    let updatedNote = this.props.currentNote;
    let notebooks = this.props.notebooks;
    notebooks.map( (notebook) => {
      if (notebook.title === value.value){
        updatedNote.notebook_id = notebook.id;
      }
    });
    this.props.updateNote(updatedNote);
    this.setState(this.selectCurrentState());
    alert.success("Notebook Switched");
    // this.props.requestNotes();
    // this.props.requestNotebooks();
  }

  render(){
    return(
      <div className="notebook-select-container">
        <Dropdown options={ this.mapNotebooks() } onChange={ this.handleSelect } value={ this.state } />
      </div>
    );
  }
}



export default NotebookSelect;
