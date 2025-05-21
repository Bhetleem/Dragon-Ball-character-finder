import React from "react";
import getCharactersFromAPI from "../../services/getCharactersFromAPI";

function FilterByKi({ characters, onFilterKiFrom, onFilterKiTo }) {
  const kiValues = characters.map((character) => character.ki);
  const uniqueSortedKi = [...new Set(kiValues)].sort((a, b) => a - b);
   const handleChangeFrom = (event) => {
        const inputValue = event.target.value;
        //console.log(inputValue);
        onFilterKiFrom(inputValue);
    };

   const handleChangeTo = (event) => {
       const inputValue = event.target.value;
       //console.log(inputValue);
       onFilterKiTo(inputValue);
   };

  return (
    <>
      <label>
        From:
        <select onChange={handleChangeFrom}>
          {uniqueSortedKi.map((ki) => (
            <option key={`from-${ki}`} value={ki}>
              {ki}
            </option>
          ))}
        </select>
      </label>
      <label>
        To:
        <select onChange={handleChangeTo}>
            {uniqueSortedKi.map((ki) => (
            <option key={`to-${ki}`} value={ki}>
              {ki}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default FilterByKi;
