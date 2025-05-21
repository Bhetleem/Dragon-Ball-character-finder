import "../scss/App.scss";

import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromAPI from "../services/getCharactersFromAPI";


import { matchPath, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const [inputName, setInputName] = useState("");
  const [filterName, setFilterName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getCharactersFromAPI().then((characters) => {
      setCharacters(characters);
    });
  },[])

  const handleInputName = (inputValue) => setInputName(inputValue);

  const handleSearch = (ev) => {
    ev.preventDefault();
    setFilterName(inputName);
    navigate("/");
  };

  const filteredCharacters = characters.filter((character) => {
  const nameMatch = character.name.toLowerCase().includes(filterName.toLowerCase());
  return nameMatch;
  });
  console.log(filteredCharacters);

  return (
    <>
    <header className="header">
      <h1 className="header__title">Dragon Ball character finder</h1>
      <img className="header__image" src="./public/DragonBall_header.jpg" alt="Dragon Ball Logo" />
    </header>
    <main>
      <Routes>
        <Route path="/" element={
           <>
        <Filters 
          onFilterName={handleInputName} 
          inputName={inputName} 
          onSearch={handleSearch} 
          characters={characters} />
       </>
      } 
      />
      </Routes>
    </main>
    </>
  );
}

export default App;