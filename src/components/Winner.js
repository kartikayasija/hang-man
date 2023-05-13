function Winner({ word, correctWords }) {
  const sortedWord = word.split('').sort().join('');
  const sortedCorrectWords = correctWords.slice().sort().join('');
  const isWinner = sortedWord === sortedCorrectWords;
  
  return isWinner ? (
    <div className="popup-container">
      <div className="popup">
        <h2>yeye</h2>
        <h3>You Won</h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  ) : null;
}

export default Winner;
