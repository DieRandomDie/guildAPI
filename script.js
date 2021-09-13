fetch('https://lyrania.co.uk/api/guilds.php?type=members&api_code=2798501')
  .then(response => response.json())
  .then(characters => showCharacters(characters.results));

showCharacters = characters => {
  const charactersDiv = document.querySelector('#rick-and-morty-characters');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = `Character Name: ${character.count}`;
    charactersDiv.append(characterElement);
  });
}
