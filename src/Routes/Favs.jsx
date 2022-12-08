import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { getFavoriteStorage } from "../Components/utils/localStore";
import CardComponet from "../Components/CardComponet";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const data = getFavoriteStorage();

  return (
    <>
      <h1>Favorite Dentists</h1>
      <p>Current state: {state.currentState}</p>
      <p>Next state: {state.nextState}</p>
      <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '1rem',
          minWidth: '90vw',
          height: 'auto',
          flexWrap: 'wrap',
          margin: '0 auto'
        }}>
        {data.map(item => (
          <CardComponet key={item.id} item={item}/>
        ))}
      </Box>
    </>
  );
};

export default Favs;
