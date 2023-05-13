function Wrong({wrongWords}) {
  // const wrongWords = ['a','b','c','d',]
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongWords.length!==0?<p>Wrong</p>: null}
        {wrongWords.map((word,index)=> <span key={index}>{word},</span> )}
      </div>
    </div>
  );
}

export default Wrong;
