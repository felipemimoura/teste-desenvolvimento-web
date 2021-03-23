import React, { useContext, useEffect, useState } from "react";
import { InputBase, TextField } from "@material-ui/core";
import GlobalContext from "../../Global/GlobalContext";

function TextFields() {
  const { states, setters } = useContext(GlobalContext);
  const [pokemonFilter, setPokemonFilter] = useState();
  console.log(states.pokemons);
  useEffect(() => {
    setPokemonFilter(states.pokemons);
  }, []);
  const handleChange = ({ target }) => {
    console.log(target.value);
    if (pokemonFilter) {
      const filter = pokemonFilter.filter((poke) =>
        poke.Name.toLowerCase().includes(target.value.toLowerCase())
      );
      console.log(filter);
      setters.setPokemons(filter);
    }
  };
  return (
    <TextField
      id="standard-basic"
      label="Nome Pokemon"
      onChange={handleChange}
    />
  );
}

export default TextFields;
