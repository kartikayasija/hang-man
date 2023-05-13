
function Stand() {
  return (
    <div className="figure">
      <svg height="250" width="400" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20" className="rod-part" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" className="rod-part" />
        <line x1="20" y1="221" x2="100" y2="221" className="pedestal" />
        <line x1="0" y1="230" x2="500" y2="230" className="bottom-rod" />
        <circle cx="140" cy="70" r="20" className="head display" />
        <line x1="140" y1="90" x2="140" y2="150" className="body display" />
        <line x1="140" y1="120" x2="120" y2="100" className="left-arm display" />
        <line x1="140" y1="120" x2="160" y2="100" className="right-arm display" />
        <line x1="140" y1="150" x2="120" y2="180" className="left-leg display" />
        <line x1="140" y1="150" x2="160" y2="180" className="right-leg display" />
      </svg>
    </div>
  );
}

export default Stand;
