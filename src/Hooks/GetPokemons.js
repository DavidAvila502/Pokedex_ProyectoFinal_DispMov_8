//Hook

import React, { useState } from "react";

const getDataApi = async (url) => {
  try {
    let response = await fetch(url);

    return response.json();
  } catch (error) {
    return false;
  }
};

const GetAllPokemons = async () => {
  try {
    let response = await getDataApi(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
    );

    let pokemones_pendientes = response.results.map((pokemon) =>
      getDataApi(pokemon.url)
    );

    let datos_pokemones = await Promise.all(pokemones_pendientes);

    return datos_pokemones;
  } catch (error) {
    return false;
  }
};

const GetPokemons = () => {
  const [result, setResult] = useState(false);

  const GetInfoPokemons = async () => {
    setResult(false);

    let result = await GetAllPokemons();
    if (result == false) {
      setResult(false);
    }
    setResult(result);
  };

  return [result, GetInfoPokemons];
};

export default GetPokemons;
