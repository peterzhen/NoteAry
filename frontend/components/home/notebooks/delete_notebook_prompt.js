import React from 'react';

const DeleteNotebookPrompt = ({ deleteNotebook, closeModal }) => {
  return(
    <div className="delete-prompt">
      <div>Are you sure you want to delete this notebook?</div>
      <p
        className="notebook-warning">
        Associated notes will be deleted too!
      </p>
      <button
        className="cancel-button"
        onClick={ closeModal }>Cancel</button>
      <button
        className="delete-button"
        onClick={ deleteNotebook }>DELETE</button>
    </div>
  );
};

export default DeleteNotebookPrompt;
