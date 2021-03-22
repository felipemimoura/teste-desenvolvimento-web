import { InputBase, TextField } from "@material-ui/core";
import React from "react";
import * as S from "./styles";
function Header() {
    const handleChange = ({target}) =>{
        console.log(target.value)
    }
  return (
    <S.Wrapper>
      {/* <h1>Header</h1> */}
      <TextField
        id="standard-basic"
        label="Nome Pokemon"
        onChange={handleChange}
      />
      {/* <InputBase placeholder="Search" /> */}
    </S.Wrapper>
  );
}

export default Header;
