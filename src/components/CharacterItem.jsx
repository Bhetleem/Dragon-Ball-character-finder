import "../scss/layout/CharacterItem.scss";
import { Link } from "react-router-dom";

function CharacterItem({ filteredCharacter }) {
  return (
    <li>
      <Link to={`/character/${filteredCharacter.id}`}>
      <div className="characterItem_container">
      <h4>{filteredCharacter.name}</h4>
      <p>{filteredCharacter.ki}</p>
      </div>
      </Link>
    </li>
  );
}
export default CharacterItem;