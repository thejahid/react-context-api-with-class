import React, { Fragment } from "react";

const Movie = ({ movieName, moviePrice }) => {
  return (
    <Fragment>
      <li>
        <h1>{movieName}</h1>
        <p>Price: {moviePrice}</p>
      </li>
    </Fragment>
  );
};

export default Movie;
