import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from 'react';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputValues, setInputValues] = useState({});
  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enableButton, setEnableButton] = useState(false);
  
  const nameValidation = (e) => {
    if (e.target.value.length >= 1 && e.target.value.length <= 5) {
      setNameIsValid(false)
      console.log(e.target.value.length);
      console.log(nameIsValid);
    }
    else {
      setNameIsValid(true);
    }
  }

  const emailValidation = (e) => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const text = e.target.value;
    const result = reg.test(text);

    if(!result && e.target.value.length ){
      setEmailIsValid(false)
    }
    else {
      setEmailIsValid(true)
    }
  }

  const registrar = () => {
    axios.post(`http://localhost:8080/odontologo`, inputValues)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  useEffect(()=>{
    if(nameIsValid && emailIsValid){
      setEnableButton(false);
    }
    else{
      setEnableButton(true);
    }
  },[nameIsValid, emailIsValid])


  return (
    <Fragment>
      <Typography variant='h4' sx={{ marginTop: '20px' }}>{'Contact'}</Typography>
      <FormGroup sx={{ width: '300px', marginTop: '20px', gap: '10px' }}>
        <FormControl>
          <InputLabel error={!nameIsValid}>{nameIsValid ? 'Full name' : 'Error'}</InputLabel>
          <Input
            error={!nameIsValid}
            name='Full name'
            onChange={(e) => nameValidation(e)}
          />
          <FormHelperText error={!nameIsValid}>{nameIsValid ? '' : 'El nombre debe contener mas de 5 letras'}</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel error={!emailIsValid}>{emailIsValid ? 'Email' : 'Error'}</InputLabel>
          <Input
            error={!emailIsValid}
            name='Email'
            coomponent='email'
            onChange={(e) => emailValidation(e)}
          />
          <FormHelperText error={!emailIsValid}>{emailIsValid ? '' : 'Debe ingresar un correo valido'}</FormHelperText>
        </FormControl>
        <Button disabled={enableButton} onClick={registrar} variant="contained" endIcon={<SendIcon />}>Send</Button>
      </FormGroup>
    </Fragment>
  );
};

export default Form;
