import React, { useState, useEffect } from "react";
import "./MyStoryScreen.scss";
import chickenman from "../assets/chickenman.jpg";
import bands from "../assets/bands.jpg";
import weights from "../assets/weights.jpg";
import running from "../assets/running.jpg";
import fitness from "../assets/fitness.jpg";
import moreweights from "../assets/moreweights.jpg";
import {BiChevronLeftSquare, BiChevronRightSquare} from 'react-icons/bi'
const MyStoryScreen = () => {
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
    <main className="story">
      <div className="story-container">
        <h2>Why Physical Therapy?</h2>
        <span className="hr-line"></span>
        <p>
          Cras ornare arcu dui vivamus arcu felis. Morbi non arcu risus quis
          varius. Proin fermentum leo vel orci. Ac turpis egestas maecenas
          pharetra convallis posuere morbi leo urna. Risus in hendrerit gravida
          rutrum quisque non tellus orci. Metus aliquam eleifend mi in. Platea
          dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. Tellus elementum sagittis vitae et leo duis. Vulputate odio
          ut enim blandit volutpat maecenas volutpat blandit aliquam. Libero
          volutpat sed cras ornare arcu dui. Ultrices tincidunt arcu non sodales
          neque.
          <br></br>
          <br></br>
          Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Commodo
          odio aenean sed adipiscing diam. Morbi blandit cursus risus at
          ultrices mi. Malesuada pellentesque elit eget gravida. Tortor id
          aliquet lectus proin nibh nisl condimentum id venenatis. Mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tincidunt
          nunc pulvinar sapien et. Nulla facilisi morbi tempus iaculis urna id.
          Vel pharetra vel turpis nunc eget. Tellus mauris a diam maecenas sed.
          Auctor eu augue ut lectus.
        </p>
      </div>

      <div className="image-gallery">
        <div className="image-list" >
          {visibleImages.map((image, index) => (
            <div className="image" >
              <img src={image} alt="Gallery" />
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={handlePrevClick}><BiChevronLeftSquare className="button-icon" /></button>
          <button onClick={handleNextClick}><BiChevronRightSquare className="button-icon"/></button>
        </div>
      </div>
    </main>
  );
};

export default MyStoryScreen;
