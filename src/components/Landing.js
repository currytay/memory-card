import React from "react";
import styles from "../styles/landing.module.css";
import { Link } from "react-router-dom";
import cameraImage from "../assets/camera.png";

// component to display landing page
const Landing = () => {
  return (
    <div className={styles.landingpagecontainer}>
      <img
        src={cameraImage}
        alt="3D illustration of camera"
        className={styles.image}
      />
      <div className={styles.titlesection}>
        <h1 className={styles.pagetitletext}>
          Welcome to the{" "}
          <span className={styles.gamenametext}>Memory Card</span> game!
        </h1>
      </div>
      <div className={styles.rulessection}>
        <p className={styles.rulestext}>
          Rules:
          <br />
          <br />
          EARN 1 point EACH TIME YOU CLICK A NEW IMAGE
          <br />
          <br />
          START OVER if you click any image more than once
          <br />
        </p>
      </div>
      <div className={styles.buttonsection}>
        <Link to="/play">
          <button className={styles.playbutton}>Click to Play</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;