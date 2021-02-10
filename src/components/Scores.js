import React from "react";
import styles from "../styles/gameboard.module.css";

const Scores = (props) => {
  const { score, highScore } = props;

  return (
    <div className={styles.scoresection}>
      <div className={styles.scoreentry}>
        <p className={styles.scoretext}>Score</p>
        <p className={styles.scoredetailstext}>{score}</p>
      </div>
      <div className={styles.scoreentry}>
        <p className={styles.scoretext}>High Score</p>
        <p className={styles.scoredetailstext}>{highScore}</p>
      </div>
    </div>
  );
};

export default Scores;