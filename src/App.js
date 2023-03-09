import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./index.css";
import Main from "./Main";
import Side from "./SideToggle";
import Header from "./Header";


function App() {
  const [formattedDate, setFormattedDate] = useState("");


  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);  


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };


    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };


  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };


  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }


      return note;
    });


    setNotes(updatedNotesArr);
  };


  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <div className="App">
      <Header onToggleSide={toggleSidebar} showSidebar={showSidebar} />


      {showSidebar && (
        <Side
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      )}
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />


    </div>
  );
}


export default App;


