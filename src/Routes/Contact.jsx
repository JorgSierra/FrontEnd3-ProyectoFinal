import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Fragment>
      <Typography variant='h4'>¿Want to know more?</Typography> 
      <Typography variant='p'>Send us your questions and we will contact yo</Typography> 
      <Form/>
    </Fragment>
  )
}

export default Contact