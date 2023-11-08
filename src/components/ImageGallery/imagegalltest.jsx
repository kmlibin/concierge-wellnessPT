// import React, { useState, useRef } from "react";
// import "./im.scss";

// import running from "../../assets/running.jpg";
// import bands from "../../assets/bands.jpg";
// import weights from "../../assets/weights.jpg";
// import fitness from "../../assets/fitness.jpg";
// import moreweights from "../../assets/moreweights.jpg";

// import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

// export const Imagegalltest = () => {
//   const cardRef = useRef(null);

//   const handleNextClick = () => {
//     if (cardRef.current) {
//       const cardWidth = cardRef.current.offsetWidth;
//       cardRef.current.scrollLeft += cardWidth;
//     }
//   };

//   const handlePrevClick = () => {
//     if (cardRef.current) {
//       const cardWidth = cardRef.current.offsetWidth;
//       cardRef.current.scrollLeft -= cardWidth;
//     }
//   };

//   return (
//     <div className="img-gallery">
//       <div className="wrapper" ref={cardRef}>
//         <div className="card">
//           <div className="img">
//             <img src={running} draggable="false" />
//           </div>
//         </div>
//         <div className="card">
//           <div className="img">
//             <img src={bands} draggable="false" />
//           </div>
//         </div>
//         <div className="card">
//           <div className="img">
//             <img src={weights} draggable="false" />
//           </div>
//         </div>
//         <div className="card">
//           <div className="img">
//             <img src={fitness} draggable="false" />
//           </div>
//         </div>
//         <div className="card">
//           <div className="img">
//             <img src={moreweights} draggable="false" />
//           </div>
//         </div>
//       </div>
//       <div className="controls">
//         <button onClick={handlePrevClick}>
//           <BsChevronCompactLeft className="button-icon arrow" id="left" />
//         </button>
//         <button onClick={handleNextClick}>
//           <BsChevronCompactRight className="button-icon arrow" id="right" />
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import './im.scss'; // Import your CSS file for styling

import running from "../../assets/running.jpg";
import bands from "../../assets/bands.jpg";
import weights from "../../assets/weights.jpg";
import fitness from "../../assets/fitness.jpg";
import moreweights from "../../assets/moreweights.jpg";

const Imagegalltest = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardData = [
    running,
    weights,
    bands,
    bands,
    moreweights,
    running,
    // Add paths to other images here
  ];
  const numCards = cardData.length;


  const handlePrevClick = () => {
    setCurrentCard((currentCard) => (currentCard - 2 + numCards) % numCards);
  };

  const handleNextClick = () => {
    setCurrentCard((currentCard) => (currentCard + 2) % numCards);
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 3000); // Change images every 3 seconds
    return () => clearInterval(interval);
  }, [currentCard]);
   return (
    <div className="wrapper">
      <i id="left" className="fa-solid fa-angle-left" onClick={handlePrevClick}></i>
      <div className="carousel">
        <div className="card-container" style={{ transform: `translateX(-${currentCard * (100 / numCards)}%)` }}>
          {cardData.map((imgPath, index) => (
            <div
              className={`card`}
              key={index}
            >
              <div className="img">
                <img src={imgPath} alt="img" draggable="false" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <i id="right" className="fa-solid fa-angle-right" onClick={handleNextClick}></i>
    </div>
  );
};

export default Imagegalltest;