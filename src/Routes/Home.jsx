import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Link, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import doctor from '../images/doctor.jpg'
// import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, state } = useContext(ContextGlobal);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
        <Card sx={{ minWidth: 300 }} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={doctor}
          />
          <CardContent sx={{ maxWidth: '90%' }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="" color="text.secondary" component='p'>
              {`User name: ${item.username}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Box>
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Box>
            {/* <Button size="small">Details</Button> */}
            <Link href={`/detail/${item.id}`}></Link>
          </CardActions>
        </Card>
      ))}
    </Box>
    </main >

  )
}

export default Home