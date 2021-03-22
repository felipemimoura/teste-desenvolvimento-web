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
        Row,
        Generation,
        ATK,
        Aquireable,
        DEF,
        Evolved,
        FamilyID,
        STA,
      }) => {
        return {
          Name,
          Row,
          Generation,
          ATK,
          Aquireable,
          DEF,
          Evolved,
          FamilyID,
          STA,
        };
      }
    );

    pokemons.push(poke);
  };
  accessSheet();

  console.log(pokemons);

  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
}

export default GlobalProvider;
