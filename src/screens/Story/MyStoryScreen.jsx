import React from "react";
import "./MyStoryScreen.scss";

import running from "../../assets/running.jpg";

import pullup from "../../assets/pullup.jpg";
import content from "../../constants/content";

const MyStoryScreen = () => {
  return (
    <article className="story" data-aos="fade-up" data-aos-duration="1000">
      <div className="text-wrap-container">
        <div className="story-title">
          <h1>{content.myStory.header}</h1>
          <span className="hr-line"></span>
        </div>
        <p>
          <img className="upper-right-image" src={pullup} alt="weight lifter" />
          {content.myStory.contentOne}
          <img className="lower-left-image" src={running} alt="group of runners" />
          {content.myStory.contentTwo}
        </p>
      </div>
    </article>
  );
};

export default MyStoryScreen;
