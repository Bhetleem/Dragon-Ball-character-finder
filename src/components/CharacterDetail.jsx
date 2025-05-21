import "../scss/layout/CharacterDetail.scss";

function CharacterDetail({selectedCharacter}) {
  return ( 
    <section className="selectedCard">
        <img className="selectedCard__image" src={selectedCharacter.image} alt={selectedCharacter.name} />
        <h3 className="selectedCard__name">{selectedCharacter.name}</h3>
        <h3 className="selectedCard__ki">{selectedCharacter.ki}</h3>
        <p className="selectedCard__description">From {selectedCharacter.description}</p>
    </section>
  )
}

export default CharacterDetail