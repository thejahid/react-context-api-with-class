import React, { useContext } from "react";
import Movie from "./Movie";
import PersonContext from "../context/PersonContext";

const Movielist = () => {
  const data = useContext(PersonContext);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <Movie key={item.id} movieName={item.name} moviePrice={item.email} />
        ))}
      </ul>
    </div>
  );
};

export default Movielist;
