import React, { useEffect, useState } from "react";
import styles from "../styles/gameboard.module.css";
import Cards from "./Cards";
import cardOne from "../assets/cardOne.png";
import cardTwo from "../assets/cardTwo.png";
import cardThree from "../assets/cardThree.png";
import cardFour from "../assets/cardFour.png";
import cardFive from "../assets/cardFive.png";
import cardSix from "../assets/cardSix.png";
import cardSeven from "../assets/cardSeven.png";
import cardEight from "../assets/cardEight.png";
import cardNine from "../assets/cardNine.png";
import cardTen from "../assets/cardTen.png";
import cardEleven from "../assets/cardEleven.png";
import cardTwelve from "../assets/cardTwelve.png";
import cardThirteen from "../assets/cardThirteen.png";
import cardFourteen from "../assets/cardFourteen.png";
import cardFifteen from "../assets/cardFifteen.png";

const Board = (props) => {
  const { score, highScore, handleClick } = props;

  // create variable with card info
  let cards = [
    {
      src: cardOne,
      alt: "Watch with red background",
      name: "watch",
      startID: 1,
    },
    {
      src: cardTwo,
      alt: "Camera with purple background",
      name: "camera",
      startID: 2,
    },
    {
      src: cardThree,
      alt: "Card reader with green background",
      name: "card reader",
      startID: 3,
    },
    {
      src: cardFour,
      alt: "Folder with purple background",
      name: "folder",
      startID: 4,
    },
    {
      src: cardFive,
      alt: "Hard disk with red background",
      name: "hard disk",
      startID: 5,
    },
    {
      src: cardSix,
      alt: "Processor with blue background",
      name: "processor",
      startID: 6,
    },
    {
      src: cardSeven,
      alt: "Phone with red background",
      name: "phone",
      startID: 7,
    },
    {
      src: cardEight,
      alt: "Laptop with purple background",
      name: "laptop",
      startID: 8,
    },
    {
      src: cardNine,
      alt: "Remote with blue background",
      name: "remote",
      startID: 9,
    },
    {
      src: cardTen,
      alt: "Headphones with yellow background",
      name: "headphones",
      startID: 10,
    },
    {
      src: cardEleven,
      alt: "Trash with yellow background",
      name: "trash",
      startID: 11,
    },
    {
      src: cardTwelve,
      alt: "Speaker with blue background",
      name: "speaker",
      startID: 12,
    },
    {
      src: cardThirteen,
      alt: "Knob with yellow background",
      name: "knob",
      startID: 13,
    },
    {
      src: cardFourteen,
      alt: "Tablet with green background",
      name: "tablet",
      startID: 14,
    },
    {
      src: cardFifteen,
      alt: "Monitor with green background",
      name: "monitor",
      startID: 15,
    },
  ];

  // create variable to display cards
  const [cardOrder, setCardOrder] = useState(cards);

  // function to shuffle cards
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    const newOrder = [...cardOrder];
    shuffle(newOrder);
    setCardOrder(newOrder);
  }, [score, highScore]);

  return (
    <div className={styles.gamesection}>
      {cardOrder.map((card) => {
        return (
          <Cards card={card} key={card.startID} handleClick={handleClick} />
        );
      })}
    </div>
  );
};

export default Board;