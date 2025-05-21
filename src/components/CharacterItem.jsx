import "../scss/layout/CharacterItem.scss";

function CharacterItem({ character }) {
  return (
    <li className="characterItem_container">
      <h4>{character.name}</h4>
      <p>{character.ki}</p>
    </li>
  );
}
export default CharacterItem;