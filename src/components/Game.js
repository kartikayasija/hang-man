import { useEffect, useState } from 'react';
import Stand from './Stand';
import Words from './Words';
import Wrong from './Wrong';

function Game(){
  const word = "abc";  
  
  const [wrongWords,setWrongWords] = useState([]);
  const [correctWords,setCorrectWords] = useState([]);

  useEffect(() => {
    const handleWindowKey = (event) => {
      event.stopPropagation();
      console.log('Window clicked!', event.key);
      if(word.includes(event.key)){
        setCorrectWords([...correctWords,event.key])
      }else{
        !wrongWords.includes(event.key)?setWrongWords([...wrongWords,event.key]):alert("already present")
      }
    };
    window.addEventListener('keydown', handleWindowKey);
    return () => {
      window.removeEventListener('keydown', handleWindowKey);
    };
  }, [wrongWords, correctWords]);

  return(
    <div className='game'>
      <Stand />
      <Wrong wrongWords ={wrongWords}></Wrong>
      <Words word={word} correctWords={correctWords} />
    </div>
  )
}

export default Game;