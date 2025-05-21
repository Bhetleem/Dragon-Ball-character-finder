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
      <label htmlFor="filterByKi">Search by Ki</label>
        From:
         <select name="filterByKi" id="filterByKi" onChange={handleChangeFrom}>
          <option value="0">From</option>
          {uniqueSortedKi.map((ki) => (
            <option key={`from-${ki}`} value={ki}>
              {ki}
            </option>
          ))}
        </select>      
        <select onChange={handleChangeTo}>
          <option value="infinity">To</option>
          {uniqueSortedKi.map((ki) => (
            <option key={`to-${ki}`} value={ki}>
              {ki}
            </option>
          ))}
        </select>
    </>
  );
}

export default FilterByKi;
