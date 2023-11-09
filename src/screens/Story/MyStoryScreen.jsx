import React from "react";
import "./MyStoryScreen.scss";

import running from "../../assets/running.jpg";

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
          <img src={pullup} className="story-image" alt="story"/>
        </div>
        {/* <div className="story-image-container">      */}
        <p style={{width: "80%", marginTop: "1.5rem"}}>{content.myStory.contentTwo}</p>
          <div className="multiple-images">
          <img src={running} className="story-image" alt="story" />
          <img src={running} className="story-image" alt="story" />
        </div>
     
          {/* <img src={running}  className="story-image" /> */}
        {/* </div> */}
      </div>
    </article>
  );
};

export default MyStoryScreen;
