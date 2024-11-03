import React, { useState, useEffect } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./pokemons";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);
  const pegarPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const dataSet = await data.results;
      const promises = await dataSet.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokedex(results);
      console.log(results);
      setLoading(false);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  useEffect(() => {
    pegarPokemon();
  }, []);

  return (
    <div className="App">
      <Pokedex pokemons={pokedex} loading={loading} />
    </div>
  );
}

export default App;
