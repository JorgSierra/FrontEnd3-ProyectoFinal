import { Box } from '@mui/material';
import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import CardComponet from '../Components/CardComponet';
// import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, state } = useContext(ContextGlobal);
  

  return (
    <main className="home" >
      <h1>Home</h1>
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
  </main >
  )
}

export default Home