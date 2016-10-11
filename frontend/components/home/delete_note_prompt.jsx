import React from 'react';

const DeleteNotePrompt = ({ deleteNote, closeModal }) => {
  return(
    <div className="delete-prompt">
      <div>Are you sure you want to delete this note?</div>
      <button
        className="cancel-button"
        onClick={ closeModal }>Cancel</button>
      <button
        className="delete-button"
        onClick={ deleteNote }>DELETE</button>
    </div>
  );
};

export default DeleteNotePrompt;
