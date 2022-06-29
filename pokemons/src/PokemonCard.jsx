import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;

  const [pokemonDetails, setPokemonDetails] = useState();
  const { height, weight } = pokemonDetails ?? {};
  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPokemonDetails(data);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div>
      <p>{name}</p>
      <p>{height}</p>
      <p>{weight}</p>
    </div>
  );
};

export default PokemonCard;
