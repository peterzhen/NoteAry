import React from 'react';
import Drawer from 'react-motion-drawer';
import NotebookListContainer from './notebooks/notebook_list_container';

class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notebookDrawerOpen: false,
      noOverlay: false
    };

    this.toggleNotebookDrawer = this.toggleNotebookDrawer.bind(this);
    this.closeNotebookDrawer = this.closeNotebookDrawer.bind(this);

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleNotebooks = this.handleNotebooks.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNotebookDrawer() {
    this.setState({ notebookDrawerOpen: !this.state.notebookDrawerOpen });
  }

  closeNotebookDrawer() {
    this.setState({ notebookDrawerOpen: false });
  }

  handleAddNote(e){
    let notebookId = this.props.notebooks[0].id;
    if ( this.props.currentNotebook ){
      notebookId = this.props.currentNotebook.id;
    }
    const defaultNote = { "title": "", "body": "", "notebook_id": `${notebookId}`};
    this.props.createNote(defaultNote);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.notes.length > this.props.notes.length){
      this.props.switchNote(nextProps.notes[0]);
    }
  }

  handleNotes(e){
    this.props.switchNotebook(null);
  }

  handleNotebooks(e){
    this.toggleNotebookDrawer();
  }

  handleTags(e){
    //
  }

  handleLogout(e){
    this.props.logout();
  }

  render (){
    const style = {
      background: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px'
    };

    return(
      <div className="sidebar-container">
        <div className="sidebar-logo"></div>

        <div className="newnote-button-container">
          <button className="sidebar-newnote-button" onClick={this.handleAddNote}></button>
          <div className="newnote-button-tooltip">NEW NOTE</div>
        </div>

        <div className="notes-button-container">
          <button className="sidebar-notes-button" onClick={this.handleNotes}></button>
          <div className="notes-button-tooltip">ALL NOTES</div>
        </div>

        <div className="notebooks-button-container">
          <button className="sidebar-notebooks-button" onClick={this.handleNotebooks}></button>
          <div className="notebooks-button-tooltip">NOTEBOOKS</div>
        </div>

        <div className="tags-button-container">
          <button className="sidebar-tags-button" onClick={this.handleTags}></button>
          <div className="tags-button-tooltip">TAGS</div>
        </div>

        <div className="logout-button-container">
          <button className="sidebar-logout-button" onClick={this.handleLogout}></button>
          <div className="logout-button-tooltip">LOG OUT</div>
        </div>

        <Drawer
          className="notebooks-drawer"
          drawerStyle={style}
          open={this.state.notebookDrawerOpen}
          onChange={open => this.setState({ notebookDrawerOpen: open})}
          width={420}>
          <NotebookListContainer closeNotebookDrawer={ this.closeNotebookDrawer }/>
        </Drawer>

      </div>
    );
  }
}

export default SideBar;
