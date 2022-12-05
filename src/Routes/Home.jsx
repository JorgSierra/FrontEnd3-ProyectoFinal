import React from 'react'
import { Outlet } from 'react-router-dom'
// import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="home" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
      <Outlet />
    </main>
    
  )
}

export default Home