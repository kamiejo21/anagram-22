import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Score from './Score';
import Timer from './Timer';
import Equation from './Equation';
import './Game.css';
import Keyboard from './Keyboard';
import anagrams from './anagramJson';

// low 0, high Array.length -1 
// set each to state
// build UI first, get one thing working and then build next


function Game({wordLength}) {

const [userAnswer, setUserAnswer] = useState('');
const [answered, setAnswered] = useState(false);
const [score, setScore] = useState(0);
const [wordList, setWordList] = useState('');
const [startingWord, setStartingWord] = useState('');

React.useEffect(()=> {
  const randomWordList = question[Math.floor(Math.random() * question.length)];
  setWordList(randomWordList)
  const randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)];
  setStartingWord(randomWord)

}, [])
console.log(startingWord)
const question = anagrams[wordLength];


const gameLength = 60; // Seconds
  const [timeLeft, setTimeLeft] = useState(gameLength);
  
  // function appendToAnswer(e) {
  // setUserAnswer(String(Number(userAnswer + num))); e.target.value
// }

// if (!answered && checkAnswer(userAnswer)) {
    // setAnswered(true);
    // setScore(score + 1);
    // setTimeout(newQuestion, 300);
  // }

  function newQuestion() {
    setUserAnswer('');
    setAnswered(false);
  }
  
        function restart() {
        setTimeLeft(gameLength);
        setScore(0);
        newQuestion();
      }




const equationClass = answered
    ? 'row my-2 text-primary fade'
    : 'row my-2 text-secondary';

    if (timeLeft === 0) {
        return (
          <div className="text-center" id="game-container">
            <h2>Time's Up!</h2>
            <strong style={{fontSize: "1.5em"}}>You Got</strong>
            <div style={{fontSize: "5em"}}>{score}</div>
            <strong style={{fontSize: "1.5em"}}>Anagrams</strong>
            <button className="btn btn-primary form-control m-1"
              onClick={restart}>
                Play Again
            </button>
            <Link className="btn btn-secondary form-control m-1" to="/">
              Back to Start Screen
            </Link>
          </div>
        );
      }

  return (
    <div className="text-center" id="game-container">
      <div className={equationClass} id="equation">
        <Equation question={startingWord} answer={userAnswer} />
      </div>
      <div className="row" style={{fontSize: "1.5em"}}>
      <Keyboard setUserAnswer={setUserAnswer} />
        <div className="col px-3 text-left">
          <Score score={score} />
        </div>
        <div className="col px-3 text-right">
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>
      </div>
      
      </div>
  );
}

export default Game;



    