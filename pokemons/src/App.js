import "./App.css";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState();
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"
  );

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPokemons(data);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(pokemons);

  return (
    <div className="App">
      {pokemons?.results?.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
      {/* conditional rendering ? provjerava jeli state undifind aa && if end else  */}
      {pokemons?.previous && (
        <button onClick={() => setUrl(pokemons.previous)}>Prev</button>
      )}
      {pokemons?.next && (
        <button onClick={() => setUrl(pokemons.next)}>Next</button>
      )}
    </div>
  );
}

export default App;
