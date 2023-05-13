import { useEffect, useState } from 'react';
import Stand from './Stand';
import Words from './Words';
import Wrong from './Wrong';
import Notification from './Notification';
import Winner from './Winner';

function Game(){
  const word = "abc";  

  const [wrongWords,setWrongWords] = useState([]);
  const [correctWords,setCorrectWords] = useState([]);
  const [notification,setNotification] = useState(false);

  useEffect(() => {
    const handleWindowKey = (event) => {
      event.stopPropagation();
      console.log('Window clicked!', event.key);
      if(word.includes(event.key)){
        !correctWords.includes(event.key)?setCorrectWords([...correctWords,event.key]):setNotification(true);
      }else{
        !wrongWords.includes(event.key)?setWrongWords([...wrongWords,event.key]):setNotification(true);
      }
      setTimeout(() => {
        setNotification(false);
      }, 2000);
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
      {notification && <Notification />}
      <Winner word={word} correctWords={correctWords}/>
    </div>
  )
}

export default Game;