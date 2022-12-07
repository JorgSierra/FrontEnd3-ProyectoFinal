import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputValues, setInputValues] = useState({})
  console.log(inputValues)

  const registrar = () => {
    axios.post(`http://localhost:8080/odontologo`, inputValues)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }


  return (
    <Fragment>
    <Typography variant='h4' sx={{ marginTop: '20px' }}>{'Contact'}</Typography>
    <FormGroup sx={{ width: '300px', marginTop: '20px', gap: '10px' }}>
      <FormControl>
        <InputLabel>{'Full name'}</InputLabel>
        <Input
          name='Full name'
          onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
        />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel>{'Email'}</InputLabel>
        <Input
          name='Email'
          onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
        />
        <FormHelperText></FormHelperText>
      </FormControl>
      
      <Button onClick={registrar} variant="contained" endIcon={<SendIcon />}>Send</Button>
    </FormGroup>
  </Fragment>
  );
};

export default Form;
