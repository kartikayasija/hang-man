function Winner({ word, correctWords, wrongWords }) {
  const sortedWord = word.split("").sort().join("");
  const sortedCorrectWords = correctWords.slice().sort().join("");
  let isWinner = null;
  if (sortedWord === sortedCorrectWords) isWinner = true;
  if (wrongWords.length > 5) isWinner = false;
  
  if (isWinner) {
    return (
      <div className="popup-container">
        <div className="popup">
          <h2>Yuhu!!</h2>
          <h3>You Won</h3>
          <button id="play-button">Play Again</button>
        </div>
      </div>
    );
  } else if(isWinner===false) {
    return(<div className="popup-container">
        <div className="popup">
          <h2>Oww!!</h2>
          <h3>You Lost</h3>
          <button id="play-button">Play Again</button>
        </div>
      </div>
    )
  }
  return null;
}

export default Winner;
