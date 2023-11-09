
import React, { useState, useEffect } from "react";
import "./im.scss"; 
import running from "../../assets/running.jpg";
import bands from "../../assets/bands.jpg";
import weights from "../../assets/weights.jpg";
import moreweights from "../../assets/moreweights.jpg";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const Imagegalltest = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardData = [running, weights, bands, bands, moreweights, running];
  const numCards = cardData.length;

  const handlePrevClick = () => {
    setCurrentCard((currentCard) => (currentCard - 2 + numCards) % numCards);
  };

  const handleNextClick = () => {
    setCurrentCard((currentCard) => (currentCard + 2) % numCards);
  };

  //auto scroll
  useEffect(() => {
    const interval = setInterval(handleNextClick, 3000);
    return () => clearInterval(interval);
  }, [currentCard]);

  return (
    <>
      <div className="wrapper">
        <div className="carousel">
          <div
            className="card-container"
            style={{
              transform: `translateX(-${currentCard * (100 / numCards)}%)`,
            }}
          >
            {cardData.map((imgPath, index) => (
              <div className={`card`} key={index}>
                <div className="img">
                  <img src={imgPath} alt="img" draggable="false" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>
          <BsChevronCompactLeft className="button-icon" />
        </button>
        <button onClick={handleNextClick}>
          <BsChevronCompactRight className="button-icon" />
        </button>
      </div>
    </>
  );
};

export default Imagegalltest;
