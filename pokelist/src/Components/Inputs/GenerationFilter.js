import {MenuItem, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../Global/GlobalContext";



const currencies = [
  {
    value: "1",
    label: "Geração: 1",
  },
  {
    value: "2",
    label: "Geração: 2",
  },
  {
    value: "3",
    label: "Geração: 3",
  },
  {
    value: "4",
    label: "Geração: 4",
  },
  {
    value: "5",
    label: "Geração: 5",
  },
  {
    value: "6",
    label: "Geração: 6",
  },
  {
    value: "7",
    label: "Geração: 7",
  },
];
const GenerationFilter = () => {

  const [currency, setCurrency] = useState("1");
  const { states, setters } = useContext(GlobalContext);
  const [pokemonFilter, setPokemonFilter] = useState();

  useEffect(() => {
    setPokemonFilter(states.pokemons);
  }, [states.pokemons]);

  const handleChange = ({ target }) => {

    if (pokemonFilter) {
      const filter = pokemonFilter.filter((poke) => {
        console.log(poke);
        return poke.Generation.includes(target.value);
      });
      console.log(filter);
      setters.setPokemons(filter);
    } else {
      setPokemonFilter(states.pokemons);
    }
  };
  return (
    <TextField
      id="standard-select-currency-native"
      select
      label="Geração"
      value={currency}
      onChange={handleChange}
      helperText="Selecione a Geração Pokemon"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.labels}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default GenerationFilter;
