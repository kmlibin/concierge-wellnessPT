import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFoundScreen = () => {
  return (
    <main className="notFound">
      <div className="notFound-wrapper">
        <h1>Oh no! We can't find what you're looking for...</h1>
        <p>
          Looks like the page you're trying to reach could use a good stretch.
        </p>
        <p>In the meantime, feel free to explore other areas of our site!</p>
        <Link to="/">Click here to return home</Link>
      </div>
    </main>
  );
};

export default NotFoundScreen;
