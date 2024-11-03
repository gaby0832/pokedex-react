import React from "react";

const Pokemons = ({ criatura, index, slider }) => {
  return (
    <div
      className={
        index === slider ? "initial-slider pokemon-single" : "pokemon-single"
      }
    >
      <img
        alt={criatura.name}
        src={criatura.sprites.other.home.front_default}
      />
      <h2>{criatura.name}</h2>
    </div>
  );
};

export default Pokemons;
