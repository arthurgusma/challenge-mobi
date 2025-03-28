async function getRickAndMortyCharacters() {
    try {
        const characters = await fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5]')
        .then(response => response.json())

        const formattedCharacters = characters.map(character => ({
            nome: character.name,
            genero: getFormattedGender(character.gender),
            avatar: character.image,
            especie: getFormattedSpecies(character.species)
        }))

        return formattedCharacters
    } catch (error) {
        const errorMessage = "Erro ao buscar personagens."
        console.error(errorMessage, error)
        return errorMessage
    }
}

function getFormattedGender(gender) {
    const genderMap = {
        'Male': 'Homem',
        'Female': 'Mulher',
    }
    return genderMap[gender] || gender
}

function getFormattedSpecies(species) {
    const speciesMap = {
        'Human': 'Humano',
    }
    return speciesMap[species] || species
}

module.exports = getRickAndMortyCharacters;