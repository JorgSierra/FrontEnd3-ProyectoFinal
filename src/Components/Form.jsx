import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputValues, setInputValues] = useState({})
  const [isValid, setIsValid] = useState(true)

  const nameValidation =(e)=>{
    if(e.target.value.length >= 1 && e.target.value.length <= 5){
      setIsValid(false)
      console.log(e.target.value.length);
      console.log(isValid);
    }
    else{
      setIsValid(true)
    }
  }

  const emailValidation = (e) => {
    if(e.target.value.length === RegExp(`^[^@]+@[^@]+[a-zA-Z]{2,}$`)){
      setIsValid(false)
      console.log(e.target.value.length);
      console.log(isValid);
    }
    else{
      setIsValid(true)
    }
  }

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
        <InputLabel error ={!isValid}>{isValid ? 'Full name' : 'Error'}</InputLabel>
        <Input
          error = {!isValid}
          name='Full name'
          onChange={(e) => nameValidation(e)}
        />
        <FormHelperText error ={!isValid}>{isValid ? '' : 'El nombre debe contener mas de 5 letras'}</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel error ={!isValid}>{isValid ? 'Email' : 'Error'}</InputLabel>
        <Input
          error = {!isValid}
          name='Email'
          type='email'
          onChange={(e) => emailValidation(e)}
        />
        <FormHelperText error ={!isValid}>{isValid ? '' : 'Debe ingresar un correo valido'}</FormHelperText>
      </FormControl>
      <Button onClick={registrar} variant="contained" endIcon={<SendIcon />}>Send</Button>
    </FormGroup>
  </Fragment>
  );
};

export default Form;
