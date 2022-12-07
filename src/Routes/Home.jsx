import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import doctor from '../images/doctor.jpg'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, state } = useContext(ContextGlobal);

  console.log(data);

  return (
    <main className="home" >
      <h1>Home</h1>
      <p>Current state: {state.currentState}</p>
      <p>Next state: {state.nextState}</p>
      <div className='card-grid'>
        {data.map(({name})=>(

<Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt="green iguana"
  height="140"
  image={doctor}
/>
<CardContent sx={{display: 'grid', gap: '10px'}}>
  <Typography gutterBottom variant="h5" component="div">
    {name}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions>
</Card>
        ))}
      </div>
    </main>

  )
}

export default Home