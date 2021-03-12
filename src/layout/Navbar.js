import React, { useContext } from "react";
import PersonContext from "../context/PersonContext";

const Navbar = () => {
  const data = useContext(PersonContext);
  return (
    <div className="navbar">
      <div className="logo">Developer Jahid - Context Api using API</div>
      <div className="totalmovies">Total Person: {data.length}</div>
    </div>
  );
};

export default Navbar;
