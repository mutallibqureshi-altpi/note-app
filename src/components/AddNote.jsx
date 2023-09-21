import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    } else {
      alert("some");
    }
    setNoteText("");
  };
  return (
    <div className="note new">
      <textarea
        cols="30"
        rows="10"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
