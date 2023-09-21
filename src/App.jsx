import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { nanoid } from "nanoid";
import Header from "./components/Header";

const date = new Date().toLocaleDateString();

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("note-app-data", JSON.stringify(notes));
    }
  }, [notes]);

  const addNotes = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const filterNote = notes.filter((note) => note.id !== id);
    setNotes(filterNote);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNotes}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
