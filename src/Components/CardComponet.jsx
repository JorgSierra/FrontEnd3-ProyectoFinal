import { CheckBox, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import doctor from '../images/doctor.jpg'

const CardComponet = ({ item }) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const addFav = ()=>{
    console.log("funciona")
    /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
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
          <CheckBox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Box>
          <Link to={`/detail/${item.id}`}>Detail</Link>
      </CardActions>
    </Card>
  );
};

export default CardComponet;
