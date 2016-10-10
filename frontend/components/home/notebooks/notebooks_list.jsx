import React from 'react';
import NotebookListItemContainer from './notebook_list_item_container';

class NotebooksList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    // if ( !this.props.currentNotebook && nextProps.notebooks.length > 0){
    //   this.props.switchNotebook(nextProps.notebooks[0]);
    // }
  }

  renderNotebooks() {
    return(
      <ul className="notebook-item-ul">
        {this.props.notebooks.map((notebook, idx) => (
          <NotebookListItemContainer
            key={`notebook-${idx}`}
            notebook={ notebook } />
        ))}
      </ul>
    );
	}

  render() {
    return (
      <div className="notebooks-index-container">
        <div className="notebooks-index-header">
          <div className="notebooks-index-title">NOTEBOOKS</div>
          <button
            className="close-notebook-drawer-button"
            onClick={ this.props.closeNotebookDrawer }/>
        </div>

        <div className="notesbooks-index-list">
          { this.renderNotebooks() }
        </div>
      </div>
    );
  }
}

export default NotebooksList;
