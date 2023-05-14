import { useEffect, useState } from "react";
import Stand from "./Stand";
import Words from "./Words";
import Wrong from "./Wrong";
import Notification from "./Notification";
import Winner from "./Winner";
import axios from "axios";
function Game() {
  const [word, setWord] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchWord = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/randomword",
          {
            headers: {
              "X-Api-Key": "cc5zPvuoB0W0e9OqvTXYqw==LQf8fhJOIpdXQ2v9",
            },
          }
        );
        if (isMounted) setWord(response.data.word.toLowerCase());
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    };

    if (word === "") {
      fetchWord();
    } else {
      console.log("no");
    }

    return () => isMounted = false; 
    
  }, [word]);
  const [wrongWords, setWrongWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const handleWindowKey = (event) => {
      event.stopPropagation();
      if (word.includes(event.key)) {
        !correctWords.includes(event.key)
          ? setCorrectWords([...correctWords, event.key])
          : setNotification(true);
      } else {
        !wrongWords.includes(event.key)
          ? setWrongWords([...wrongWords, event.key])
          : setNotification(true);
      }
      setTimeout(() => {
        setNotification(false);
      }, 2000);
    };
    window.addEventListener("keydown", handleWindowKey);
    return () => window.removeEventListener("keydown", handleWindowKey);
  }, [wrongWords, correctWords, word]);

  const restartGame = () => {
    setWrongWords([]);
    setCorrectWords([]);
    setWord("");
  };

  return (
    <div className="game">
      <Stand wrongWords={wrongWords} />
      <Wrong wrongWords={wrongWords}></Wrong>
      <Words word={word} correctWords={correctWords} />
      {notification && <Notification />}
      <Winner
        word={word}
        correctWords={correctWords}
        wrongWords={wrongWords}
        restartGame={restartGame}
      />
    </div>
  );
}

export default Game;
