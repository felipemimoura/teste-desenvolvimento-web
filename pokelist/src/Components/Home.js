import React, { useContext } from "react";
import GlobalContext from "../Global/GlobalContext";
import Card from "./Card/Card";
import Header from "./Header/Header";

function Home() {
  const { states } = useContext(GlobalContext);
  const pokemons = states.pokemons;

  const cardPokemons = (pokemons) => {
    const arrays = pokemons.slice(0, 50).map((pokemom) =>{
        return(
            <Card key={pokemom.Name} pokemon={pokemom}/>
        )
    })
    return arrays
  };
  return (
    <div>
      <Header />
      {pokemons && cardPokemons(pokemons)}
    </div>
  );
}

export default Home;
