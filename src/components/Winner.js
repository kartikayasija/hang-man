function Winner({ word, correctWords, wrongWords, restartGame }) {
  const sortedWord = word.split("").sort().join("");
  const sortedCorrectWords = correctWords.slice().sort().join("");
  const uniqueWord = [...new Set(sortedWord)].join('');
  let isWinner = null;
  if(word!==''){
    if (uniqueWord === sortedCorrectWords) isWinner = true;
    if (wrongWords.length > 5) isWinner = false;
  }

  if (isWinner) {
    return (
      <div className="popup-container">
        <div className="popup">
          <h2>Yuhu!!</h2>
          <h3>You Won</h3>
          <button id="play-button" onClick={restartGame}>Play Again</button>
        </div>
      </div>
    );
  } else if(isWinner===false) {
    return(<div className="popup-container">
        <div className="popup">
          <h2>Oww!!</h2>
          <h3>You Lost</h3>
          <button id="play-button" onClick={restartGame}>Play Again</button>
        </div>
      </div>
    )
  }
  return null;
}

export default Winner;
