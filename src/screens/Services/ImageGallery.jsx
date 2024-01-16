import React, { useEffect, useState, useCallback } from "react";

//styles
import "./ImageGallery.scss";

//images
import gymbrand from './GalleryPhotos/gymbrand.jpg'
import gymweights from './GalleryPhotos/gymweights.jpg'
import gym from './GalleryPhotos/gym.jpg'
import foot from './GalleryPhotos/foot.jpg'
import assessment from './GalleryPhotos/assessment.jpg'
import looking from './GalleryPhotos/looking.jpg'
import stretch from './GalleryPhotos/stretch.jpg'
import squarehips from './GalleryPhotos/squarehips.jpg'
import device from './GalleryPhotos/device.jpg'
import manipulation from './GalleryPhotos/manipulation.jpg'
import treatment1 from './GalleryPhotos/treatment1.jpg'
import cords from './GalleryPhotos/cords.JPG'

//libraries
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const ImageGallery = () => {
  const images = [
    device,
    gym,
    looking,
    gymweights,
    foot,
    assessment,
    gymbrand,
    manipulation,
    stretch,
    treatment1,
    squarehips,
    cords,
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
  const autoScroll = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length]);

  //auto scrolling
  useEffect(() => {
    const intervalId = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalId);
  }, [autoScroll]);

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
              <img
                src={image}
                alt="Dr. Wade providing guidance and treatment"
              />
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
