import "../scss/layout/CharacterDetail.scss";

function CharacterDetail({selectedCharacter}) {
  return ( 
    <section>
        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        <h3>{selectedCharacter.name}</h3>
        <h3>{selectedCharacter.ki}</h3>
        <p>From {selectedCharacter.description}</p>
    </section>
  )
}

export default CharacterDetail