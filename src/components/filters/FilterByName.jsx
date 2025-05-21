import React from "react";

function FilterByName({ inputName, onFilterName }) {
    const handleChange = (event) => {
        onFilterName(event.target.value);
    };

  return (
    <input 
      type="text"
      placeholder="Goku"
      value={inputName}
      onChange={handleChange}
    />
  );
}

export default FilterByName;
