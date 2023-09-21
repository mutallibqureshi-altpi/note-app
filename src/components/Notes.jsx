import React from "react";

const Notes = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <i
          className="fa-solid fa-trash"
          onClick={() => handleDeleteNote(id)}
        ></i>
      </div>
    </div>
  );
};

export default Notes;
