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
      <div className="drawer-index-container">
        <div className="drawer-index-header">
          <div className="drawer-index-title">NOTEBOOKS</div>
          <div className="drawer-count">{`${this.props.notebooks.length} Notebooks`}</div>

          <div className="drawer-add-button-container">
            <button
              className="drawer-add-button"
              onClick={ this.openNotebookModal }/>
          </div>

          <div className="drawer-close-button-container">
            <button
              className="drawer-close-button"
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
//
// <div className="close-notebook-drawer-button-tooltip">CLOSE</div>
// <div className="add-notebook-button-tooltip">NEW NOTEBOOK</div>

export default NotebooksList;
