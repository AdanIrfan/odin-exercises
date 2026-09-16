async function getPokimon() {
  try {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!promise.ok) {
      throw new Error("HTTP bad request");
    }
    const pokimon = await promise.json();

    const speciesUrl = pokimon.species.url;
    const species = await fetch(speciesUrl);
    if (!species.ok) {
      throw new Error("HTTP bad request");
    }
    const parsedSpecies = await species.json();

    console.log(`Name: ${parsedSpecies.habitat.name}
    habitat: ${parsedSpecies.habitat}
    Height: ${pokimon.height}
    weight: ${pokimon.weight}
    `);
  } catch (error) {
    console.log(error);
  }
}

getPokimon();
