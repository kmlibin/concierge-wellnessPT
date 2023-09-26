import React from "react";
import "./BioScreen.scss";
import chickenman from "../assets/chickenman.jpg";
const BioScreen = () => {
  return (
    <main className="bio" data-aos="fade-up"
    data-aos-duration="1000">
      <div className="bio-container">
        <div className="bio-image-container">
          <img src={chickenman} />
        </div>
        <div className="bio-container-text">
          <h2>Dr. Christian Wade</h2>
          <h4>Owner of Concierge Wellness</h4>
          <h5>PT DPT, etc.</h5>
          <span className="hr-line"></span>
          <p>
            Cras ornare arcu dui vivamus arcu felis. Morbi non arcu risus quis
            varius. Proin fermentum leo vel orci. Ac turpis egestas maecenas
            pharetra convallis posuere morbi leo urna. Risus in hendrerit
            gravida rutrum quisque non tellus orci. Metus aliquam eleifend mi
            in. Platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim. Tellus elementum sagittis vitae et leo duis.
            Vulputate odio ut enim blandit volutpat maecenas volutpat blandit
            aliquam. Libero volutpat sed cras ornare arcu dui. Ultrices
            tincidunt arcu non sodales neque.
            <br></br>
            <br></br>
            Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Commodo
            odio aenean sed adipiscing diam. Morbi blandit cursus risus at
            ultrices mi. Malesuada pellentesque elit eget gravida. Tortor id
            aliquet lectus proin nibh nisl condimentum id venenatis. Mauris
            commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            Tincidunt nunc pulvinar sapien et. Nulla facilisi morbi tempus
            iaculis urna id. Vel pharetra vel turpis nunc eget. Tellus mauris a
            diam maecenas sed. Auctor eu augue ut lectus.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BioScreen;
