import React, { useState, useEffect } from "react";
import "./MyStoryScreen.scss";
import chickenman from "../../assets/chickenman.jpg";
import bands from "../../assets/bands.jpg";
import weights from "../../assets/weights.jpg";
import running from "../../assets/running.jpg";
import fitness from "../../assets/fitness.jpg";
import moreweights from "../../assets/moreweights.jpg";

const MyStoryScreen = () => {
  return (
    <article className="story" data-aos="fade-up" data-aos-duration="1000">
      <div className="story-content">
        <div className="story-title">
          <h1>Why Physical Therapy?</h1>
          <span className="hr-line"></span>
        </div>
        <p>
          Cras ornare arcu dui vivamus arcu felis. Morbi non arcu risus quis
          varius. Proin fermentum leo vel orci. Ac turpis egestas maecenas
          pharetra convallis posuere morbi leo urna. Risus in hendrerit gravida
          rutrum quisque non tellus orci. Cras ornare arcu dui vivamus arcu
          felis. Morbi non arcu risus quis varius. Proin fermentum leo vel orci.
          Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
          Risus in hendrerit gravida rutrum quisque non tellus orci. Cras ornare
          arcu dui vivamus arcu felis. Morbi non arcu risus quis varius. Proin
          fermentum leo vel orci. Ac turpis egestas maecenas pharetra convallis
          posuere morbi leo urna. Risus in hendrerit gravida rutrum quisque non
          tellus orci.Cras ornare arcu dui vivamus arcu felis. Morbi non arcu
          risus quis varius. Proin fermentum leo vel orci. Ac turpis egestas
          maecenas pharetra convallis posuere morbi leo urna. Risus in hendrerit
          gravida rutrum quisque non tellus orci.{" "}
        </p>
        <img src={moreweights} className="story-image" />

        <p>
          Metus aliquam eleifend mi in. Platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim. Tellus elementum sagittis
          vitae et leo duis. Vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit aliquam. Libero volutpat sed cras ornare arcu dui.
          Ultrices tincidunt arcu non sodales neque. Cras ornare arcu dui
          vivamus arcu felis. Morbi non arcu risus quis varius. Proin fermentum
          leo vel orci. Ac turpis egestas maecenas pharetra convallis posuere
          morbi leo urna. Risus in hendrerit gravida rutrum quisque non tellus
          orci.
        </p>
        <div className="multiple-images">
          <img src={running} className="story-image" />
          <img src={running} className="story-image" />
        </div>

        <p>
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
    </article>
  );
};

export default MyStoryScreen;
