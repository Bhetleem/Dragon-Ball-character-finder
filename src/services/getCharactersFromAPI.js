const getCharactersFromAPI = () => {
    return fetch("https://dragonball-api.com/api/characters")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.items.map((character) => {
                const cleanedKi = character.ki.replace(/\./g, '');
                return {
                    name: character.name,
                    image: character.image,
                    ki: parseFloat(cleanedKi),
                    description: character.description,
                    id: character.id,
                }
            })
            console.log(parsedCharacters);
            return parsedCharacters;
        })
}

export default getCharactersFromAPI;