import React from 'react';

const DeleteNotePrompt = ({ deleteNote, closeModal }) => {
  return(
    <div className="delete-note-prompt">
      <div>Are you sure you want to delete this note?</div>
      <button
        className="delete-note-cancel-button"
        onClick={ closeModal }>Cancel</button>
      <button
        className="delete-note-delete-button"
        onClick={ deleteNote }>DELETE</button>
    </div>
  );
};

export default DeleteNotePrompt;
