const SideToggle = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>&#43;</button>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
               
              </div>
  
  
                <div className="sidebar-note-body">{body.split(" ").slice(0, 10).join(" ")}{body.split(" ").length > 10 ? "..." : ""}</div>
  
  
             
  
  
              <small className="note-meta">
                {" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                   month: "long",
                   day: "numeric",
                   year: "numeric",
                   hour: "2-digit",
                   minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default SideToggle;
  
  