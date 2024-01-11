
import React, { useState, useEffect, useCallback } from "react";
import "./im.scss"; 
import gymweights from "../../assets/gymweights.jpg";
import gym from "../../assets/gym.jpg";
import foot from "../../assets/foot.jpg";
import assessment from "../../assets/assessment.jpg";
import stretch from "../../assets/stretch.jpg";
import treatment1 from "../../assets/treatment1.jpg";
import cords from "../../assets/cords.JPG";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const Imagegalltest = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardData = [gym, gymweights, foot, assessment, stretch, treatment1, cords];
  const numCards = cardData.length;

  const handlePrevClick = () => {
    setCurrentCard((currentCard) => (currentCard - 2 + numCards) % numCards);
  };

  const handleNextClick = useCallback(() => {
    setCurrentCard((currentCard) => (currentCard + 1) % numCards);
  }, [numCards]);

  //auto scroll
  useEffect(() => {
    const interval = setInterval(handleNextClick, 3000);
    return () => clearInterval(interval);
  }, [currentCard, handleNextClick]);

  return (
    <>
      <div className="wrapper">
        <div className="carousel">
          <div
            className="imgcard-container"
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
