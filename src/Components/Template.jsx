import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Template = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
      }}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Box>
  )
}

export default Template