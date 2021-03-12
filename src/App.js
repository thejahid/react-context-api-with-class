import React, { useEffect, useState } from "react";
import Movielist from "./components/Movielist";
import Navbar from "./layout/Navbar";
import "./App.css";
import PersonContext from "./context/PersonContext";

import Persons from "./persons/index";

const persons = new Persons();

function App() {
  const [personsData, setPersonsData] = useState([]);

  //getting datab
  useEffect(() => {
    persons
      .getPerson()
      .then((data) => setPersonsData(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(personsData);

  return (
    <PersonContext.Provider value={personsData}>
      <div className="App">
        <Navbar />
        <Movielist />
      </div>
    </PersonContext.Provider>
  );
}

export default App;
