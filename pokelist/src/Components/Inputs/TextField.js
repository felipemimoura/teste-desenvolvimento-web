import React, { useContext, useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import GlobalContext from "../../Global/GlobalContext";

function TextFields() {
  const { states, setters } = useContext(GlobalContext);
  const [pokemonFilter, setPokemonFilter] = useState();

  useEffect(() => {
    setPokemonFilter(states.pokemons);
  }, []);

  const handleChange = ({ target }) => {
    console.log(pokemonFilter);
    if (pokemonFilter) {
      const filter = pokemonFilter.filter((poke) =>
        poke.Name.toLowerCase().includes(target.value.toLowerCase())
      );
      setters.setPokemons(filter);
    }
  };
  return (
    <TextField
      id="standard-basic"
      label="Busque Pokemon"
      onChange={handleChange}
    />
  );
}

export default TextFields;
