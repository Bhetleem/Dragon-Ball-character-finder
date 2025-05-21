import "../scss/App.scss";

import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromAPI from "../services/getCharactersFromAPI";


import { matchPath, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputKiFrom, setInputKiFrom] = useState(0);
  const [inputKiTo, setInputKiTo] = useState(Infinity);

  const [filterName, setFilterName] = useState("");
  const [filterKiFrom, setFilterKiFrom] = useState(0);
  const [filterKiTo, setFilterKiTo] = useState(Infinity);

  const navigate = useNavigate();

  useEffect(() => {
    getCharactersFromAPI().then((characters) => {
      setCharacters(characters);
    });
  },[])

  const handleInputName = (inputValue) => setInputName(inputValue);
  const handleInputKiFrom = (inputValue) => setInputKiFrom(inputValue);
  const handleInputKiTo = (inputValue) => setInputKiTo(inputValue);

  const handleSearch = (ev) => {
    ev.preventDefault();
    setFilterName(inputName);
    setFilterKiFrom(inputKiFrom);
    setFilterKiTo(inputKiTo);
    navigate("/results");
  };

  const filteredCharacters = characters.filter((character) => {
  const nameMatch = character.name.toLowerCase().includes(filterName.toLowerCase());
  const kiMatch = character.ki >= filterKiFrom && character.ki <= filterKiTo;
  return nameMatch && kiMatch;
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
              onFilterKiFrom={handleInputKiFrom}
              inputKiFrom={inputKiFrom}
              onFilterKiTo={handleInputKiTo}
              inputKiTo={inputKiTo}
              characters={characters}
            />
          </>
        } 
        />
        <Route
            path="/results"
            element={
              <>
              <CharacterList filteredCharacters={filteredCharacters} />
              </>
            }
          />
      </Routes>
    </main>
    </>
  );
}

export default App;