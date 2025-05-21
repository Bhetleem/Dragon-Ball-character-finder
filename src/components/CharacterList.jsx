import CharacterItem from "./CharacterItem";
import "../scss/layout/CharacterList.scss";

function CharacterList({filteredCharacters}) {   
  const characterElements = filteredCharacters.map((filteredCharacter) => {
    return <CharacterItem key={filteredCharacter.id} filteredCharacter={filteredCharacter} />
  })
  
  return (
    <section>
      <h3>{filteredCharacters.length} results found</h3>
      <ul>
        {characterElements}
      </ul>
    </section>
  )
}

export default CharacterList;

