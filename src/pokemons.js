export const getPokemons = async (limite = 100, offset = 56) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.lo("error ", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.lo("error ", error);
  }
};
