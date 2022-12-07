import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <p>Current state: {state.currentState}</p>
      <p>Next state: {state.nextState}</p>
      <Form/>
    </div>
  )
}

export default Contact