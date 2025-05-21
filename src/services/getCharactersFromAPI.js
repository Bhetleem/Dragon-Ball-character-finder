const getCharactersFromAPI = () => {
    return fetch("https://dragonball-api.com/api/characters")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
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
            });
            return parsedCharacters;
        })
        .catch(error => {
            throw new Error(`Error fetching characters: ${error.message}`);
        });
}

export default getCharactersFromAPI;