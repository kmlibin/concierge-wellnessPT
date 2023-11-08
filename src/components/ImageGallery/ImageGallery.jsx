import React, { useEffect, useState } from "react";
import "./ImageGallery.scss";
import chickenman from "../../assets/chickenman.jpg";
import bands from "../../assets/bands.jpg";
import weights from "../../assets/weights.jpg";
import running from "../../assets/running.jpg";
import fitness from "../../assets/fitness.jpg";
import moreweights from "../../assets/moreweights.jpg";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const ImageGallery = () => {
  const images = [
    chickenman,
    chickenman,
    bands,
    weights,
    running,
    fitness,
    moreweights,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 5;

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const autoScroll = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };
  //auto scrolling 
  useEffect(() => {
    const intervalId = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  //determine images present in the array (in what order) based on index
  const visibleImages = [];
  for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
    const index = i % images.length;
    visibleImages.push(images[index]);
  }
  return (
    <>
      <div className="image-gallery">
        <div className="image-list">
          {visibleImages.map((image, index) => (
            <div className="image">
              <img src={image} alt="Gallery" />
            </div>
          ))}
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

export default ImageGallery;
