import React from "react";
import styles from "../styles/gameboard.module.css";

const Cards = (props) => {
  const {
    card: { src, alt, name },
    handleClick,
  } = props;

  return (
    <div className={styles.cardentry}>
      <img
        className={styles.card}
        src={src}
        alt={alt}
        name={name}
        onClick={handleClick.bind(this, name)}
      />
    </div>
  );
};

export default Cards;