import "../../scss/layout/Filters.scss";
import FilterByName from "./FilterByName";
import FilterByKi from "./FilterByKi";

function Filters({
  inputName,
  inputKiFrom,  
  inputKiTo,
  onFilterName, 
  onFilterKiFrom, 
  onFilterKiTo, 
  onSearch, 
  characters 
}) {
  return (
    <>
    <h2>What Dragon Ball character are you looking for?</h2>
     <form onSubmit={onSearch}>
      <FilterByName inputName={inputName} onFilterName={onFilterName} />
      <FilterByKi 
        inputKiFrom={inputKiFrom}
        inputKiTo={inputKiTo}
        onFilterKiFrom={onFilterKiFrom} 
        onFilterKiTo={onFilterKiTo} 
        characters={characters} 
      />
      <button type="submit">Search</button>
    </form>
    </>
  )
}
export default Filters;
