import React, { useState } from "react";
import "./Testimonials.scss";
import reviewData from "./data/testimonials";
import FontAwesome from "./FontAwesome";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //will show one testimonial at a time, based on index
  const review = reviewData[currentIndex];
  console.log(review);
  const kitCode = process.env.FONTAWESOME;

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      {reviewData?.length && (
        <>
          <div className="testimonial-item">
            <h4>{review.name}</h4>
            <p>{review.content}</p>
          </div>

          <div className="testimonial-btns">
            <div
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1
                )
              }
            >
              <FontAwesome kitCode={kitCode} />
              <i className="fas fa-heart white"></i>
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === reviewData.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              {/* <HiChevronRight /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
