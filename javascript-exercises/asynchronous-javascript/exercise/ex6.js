async function getPokimon(name = "pikachu") {
  try {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!promise.ok) {
      throw Error("Http bad request ");
    }
    const pokimon = await promise.json();
    console.log(`Name: ${pokimon.name}
    Height: ${pokimon.height}
    weight: ${pokimon.weight}
    experience: ${pokimon.base_experience}
    type: ${pokimon.types[0].type.name}    `);
  } catch (error) {
    console.log(error.message);
  }
}
getPokimon("pikachu");
