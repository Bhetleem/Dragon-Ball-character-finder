import "../scss/App.scss";

import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromAPI from "../services/getCharactersFromAPI";


import { matchPath, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

   useEffect(() => {
    getCharactersFromAPI().then((characters) => {
      setCharacters(characters);
    });
  },[])

  return (
    <>
    <header>
      <h1>Dragon Ball character finder</h1>
       <img src="./public/DragonBall_header.jpg" alt="Dragon Ball Logo" />
    </header>
    <main>
      <>
        <Filters/>
        <CharacterList/>
      </>
    </main>
    </>
  );
}

export default App;