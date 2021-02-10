import React from "react";
import styles from "../styles/gameboard.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headingsection}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.headingtext}>Memory Card Game</h1>
      </Link>
    </div>
  )
}

export default Header;