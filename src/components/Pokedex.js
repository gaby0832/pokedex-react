import React, { useState } from "react";
import Pokemons from "./Pokemons";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  const [slider, setSlider] = useState(0);
  const passarPokemon = () => {
    setSlider(slider + 1);
    if (slider >= pokemons.length - 1) {
      setSlider(0);
    }
  };

  const voltarPokemon = () => {
    setSlider(slider - 1);
    if (slider === 0) {
      setSlider(pokemons.length - 1);
    }
  };

  return (
    <div className="pokedex">
      <div className="hover-bullet">
        <button onClick={voltarPokemon}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <div className="poke-grid">
          {pokemons &&
            pokemons.map((criatura, index) => {
              return (
                <Pokemons
                  criatura={criatura}
                  key={index}
                  index={index}
                  slider={slider}
                />
              );
            })}
        </div>
      )}
      <div className="hover-bullet">
        <button onClick={passarPokemon}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
