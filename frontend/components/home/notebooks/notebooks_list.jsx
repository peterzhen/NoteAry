import React from 'react';
import Modal from 'react-modal';
import NotebookListItemContainer from './notebook_list_item_container';
import CreateNotebookPromptContainer from './create_notebook_prompt_container';
import { NotebookFormModalStyle } from '../../modal_styles/create_notebook_modal_style';

class NotebooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      notebookModalOpen: false
    };

    this.openNotebookModal = this.openNotebookModal.bind(this);
    this.closeNotebookModal = this.closeNotebookModal.bind(this);
  }

  openNotebookModal() {
    this.setState({ notebookModalOpen: true });
  }

  closeNotebookModal() {
    this.setState({ notebookModalOpen: false });
  }

  renderNotebooks() {
    return(
      <ul className="notebook-item-ul">
        {this.props.notebooks.map((notebook, idx) => (
          <NotebookListItemContainer
            key={`notebook-${idx}`}
            notebook={ notebook }
            closeDrawer={ this.props.closeNotebookDrawer } />
        ))}
      </ul>
    );
	}

  render() {
    return (
      <div className="notebooks-index-container">
        <div className="notebooks-index-header">
          <div className="notebooks-index-title">NOTEBOOKS</div>
          <div className="notebooks-count">{`${this.props.notebooks.length} Notebooks`}</div>
          <div className="add-notebook-button-container">
            <button
              className="add-notebook-button"
              onClick={ this.openNotebookModal }/>
          </div>

          <div className="close-notebook-drawer-container">
            <button
              className="close-notebook-drawer-button"
              onClick={ this.props.closeNotebookDrawer }/>
          </div>

        </div>

        <div className="notesbooks-index-list">
          { this.renderNotebooks() }
        </div>

        <Modal
          isOpen={this.state.notebookModalOpen}
          onRequestClose={this.closeNotebookModal}
          style={ NotebookFormModalStyle }>

          <CreateNotebookPromptContainer
            closeModal={this.closeNotebookModal}/>
        </Modal>

      </div>
    );
  }
}

// <div className="add-notebook-button-tooltip">NEW NOTEBOOK</div>
// <div className="close-notebook-drawer-button-tooltip">CLOSE</div>

export default NotebooksList;
