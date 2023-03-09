function Header({ onToggleSide, showSidebar }) {
    return (
      <div className="header">
        <h1> Lotion</h1>
        <h3>Lotion. Like Notion, but worse.</h3>
        <button onClick={onToggleSide}>
            <span>&#9776;</span>
        </button>
      </div>
    );
  }
  
  
  export default Header;
  
  
  
  
  