function Words({correctWords,word}){
  // const rightWords =['a','b','c','d']
  return (
    <div className="word">
      {word.split('').map((word,index)=>
        <span key={index} className="letter">{correctWords.includes(word)?word:""}</span>
      )}
    </div>
  )
}
export default Words;