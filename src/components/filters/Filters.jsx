import "../../scss/layout/Filters.scss";
import FilterByName from "./FilterByName";

function Filters({onFilterName, inputName, onSearch }) {
  return (
    <>
    <h2>What Dragon Ball character are you looking for?</h2>
    <form onSubmit={onSearch}>
      <FilterByName inputName={inputName} onFilterName={onFilterName} />
      <button type="submit">Search</button>
    </form>
    </>
  )
}
export default Filters;
