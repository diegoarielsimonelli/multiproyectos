import {useState} from "react";

import styles from "./pokemon.module.css";
const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslast",
];

// console.log( MATCH);
type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, sethasWon] = useState(false);
  const MATCH = Math.floor(Math.random() * POKEMONS.length);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();
    const {pokemon} = event.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      sethasWon(true);
      alert("¡Adivinaste!👌");
    } else {
      alert("Este pokemon no se llama asi 😅 ");
      pokemon.value = "";
    }
    console.log(POKEMONS[MATCH]);
  }

  return (
    <div
      className={styles.pokemonContainer}
      style={{
        display: "flex",
        placeItems: "center",
      }}
    >
      <img
        alt="pokemon"
        height={500}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        width={500}
      />

      {hasWon ? (
        <button onClick={() => location.reload()}>Play Again</button>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input autoFocus name="pokemon" type="text" />
            <button type="submit"> Submit</button>
          </form>
          <button style={{margin: "1rem", padding: 2}} onClick={() => location.reload()}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}
