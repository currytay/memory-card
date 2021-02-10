import React, { useState } from "react";
import styles from "../styles/gameboard.module.css";
import Scores from "./Scores";
import Header from "./Header";
import Board from "./Board";
import WinGame from "./WinGame";
import LoseGame from "./LoseGame";

// component to display game page
const Game = () => {
  // create variables for scores, array of clicked cards, and win/loss
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  // functions to update scores
  const handleScore = () => {
    setScore(score + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  // function to reset score and array of clicked cards
  const reset = () => {
    setScore(0);
    setClickedCards([]);
    setWin(false);
    setLose(false);
    setGameActive(true);
  };

  // function to perform checks on card click
  const handleClick = (name) => {
    if (clickedCards.includes(name)) {
      setGameActive(false); // end game
      setLose(true);
      if (score > highScore) {
        // check for new high score
        handleHighScore();
      }
    } else if (!clickedCards.includes(name)) {
      if (score === 14) {
        // check for winner
        setGameActive(false); // end game
        setWin(true);
        setHighScore(15); // set high score
        return;
      }
      handleScore(); // increase score by 1
      setClickedCards((clickedCards) => [...clickedCards, name]); // add card to array
    }
  };

  return (
    <>
      {lose && <LoseGame reset={reset} />}
      {win && <WinGame reset={reset} />}
      {gameActive && (
        <div className={styles.gameboardcontainer}>
          <Header />
          <Scores score={score} highScore={highScore} />
          <Board
            handleClick={handleClick}
            score={score}
            highScore={highScore}
          />
        </div>
      )}
    </>
  );
};

export default Game;