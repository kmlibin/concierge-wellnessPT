import React, { useState, useEffect } from "react";
import "./MyStoryScreen.scss";
import chickenman from "../../assets/chickenman.jpg";
import bands from "../../assets/bands.jpg";
import weights from "../../assets/weights.jpg";
import running from "../../assets/running.jpg";
import fitness from "../../assets/fitness.jpg";
import pullup from "../../assets/pullup.jpg";
import content from "../../constants/content";

const MyStoryScreen = () => {
  return (
    <article className="story" data-aos="fade-up" data-aos-duration="1000">
      <div className="story-content">
        <div className="story-title">
          <h1>{content.myStory.header}</h1>
          <span className="hr-line"></span>
        </div>
        <div className="story-image-container">
          <p>{content.myStory.contentOne}</p>
          <img src={pullup} className="story-image" />
        </div>
        {/* <div className="story-image-container">      */}
        <p style={{width: "80%", marginTop: "1.5rem"}}>{content.myStory.contentTwo}</p>
          <div className="multiple-images">
          <img src={running} className="story-image" />
          <img src={running} className="story-image" />
        </div>
     
          {/* <img src={running}  className="story-image" /> */}
        {/* </div> */}
      </div>
    </article>
  );
};

export default MyStoryScreen;
