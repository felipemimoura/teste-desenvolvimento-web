import React, { useEffect, useState } from "react";
import credentials from "../credentials.json";
import GlobalContext from "./GlobalContext";
// const { promisify } = require("util");
const { GoogleSpreadsheet } = require("google-spreadsheet");

function GlobalProvider(props) {
  const [pokemons, setPokemons] = useState([]);

  const docID = "13si0uFHmJI3fk265PIL4FN3rRsOg53oa4WSCKGro45E";

  const accessSheet = async () => {
    const doc = new GoogleSpreadsheet(docID);
    // console.log(doc);
    await doc.useServiceAccountAuth({
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    });

    await doc.loadInfo();
    // console.log("Titulo", doc);

    const sheet = doc.sheetsById[0];
    const rows = await sheet.getRows();

    const poke = rows.map(
      ({
        Name,
        Pokedex_Number,
        Generation,
        Evolution_Stage,
        Type_1,
        Type_2,
        Weather_1,
        Weather_2,
        STAT_TOTAL,
        ATK,
        DEF,
        Evolved,
        FamilyID,
        STA,
        CP_40,
        CP_39,
      }) => {
        return {
          key: Name,
          Name,
          Pokedex_Number,
          Generation,
          Evolution_Stage,
          Type_1,
          Type_2,
          Weather_1,
          Weather_2,
          ATK,
          STAT_TOTAL,
          DEF,
          Evolved,
          FamilyID,
          STA,
          CP_40,
          CP_39,
        };
      }
    );

    setPokemons(poke);
  };

  useEffect(() => {
    accessSheet();
  }, []);

  const states = { pokemons };
  const setters = {setPokemons}
  const data = { states, setters };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
