import React from "react";
import styles from "../styles/gameover.module.css";
import { FallingEmojis } from "falling-emojis";

// component to display page when user wins
const WinGame = (props) => {
  const { reset } = props;

  return (
    <div className={styles.gameovercontainer}>
      <FallingEmojis emoji={"🎉"} />
      <div className={styles.headingsection}>
        <h1 className={styles.headingtext}>
          Congratulations!
          <br />
          You've won the game!
        </h1>
      </div>
      <div className={styles.buttonsection}>
        <button className={styles.playagainbutton} onClick={reset}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinGame;