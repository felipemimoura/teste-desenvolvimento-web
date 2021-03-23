import React from "react";
import * as S from "./styles";

function Card({ pokemon }) {
  // console.log(pokemon);
  return (
    <S.CardContainer>
      <p>Nome: {pokemon.Name}</p>
      <p>VIDA: {pokemon.STA}</p>
      <p>Ataque: {pokemon.ATK}</p>
      <p>DEFESA: {pokemon.DEF}</p>
      <p>Generation: {pokemon.Generation}</p>
      <p>{pokemon.Weather_1}</p>
      <p>{pokemon.Weather_2}</p>
    </S.CardContainer>
  );
}

export default Card;
