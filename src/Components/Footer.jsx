import { Box, Typography } from '@mui/material'
import React from 'react'
import dh from '../images/DH.png'
import icofacebook from '../images/ico-facebook.png'
import icoinstagram from '../images/ico-instagram.png'
import icotiktok from '../images/ico-tiktok.png'
import icotiwhatsapp from '../images/ico-whatsapp.png'


const Footer = () => {

  const itemData = [icofacebook, icotiktok, icoinstagram, icotiwhatsapp]


  return (
    <Box component='footer' sx={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '1rem',
      padding: '1rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: "#0e70cc",
      width: '100%'
    }}
    >
      <Box component='div'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: "bloe",
      }}
      >
        <Typography variant='h5'>Powered by</Typography>
        <img style={{ width: '200px' }} src={dh} alt='dh' />
      </Box>
      <Box componet='div' sx={{display:'flex', }}>
        {itemData.map((item, index) => (
          <img
            style={{ width: '50px', height: 'auto', marginLeft: '1rem' }}
            src={`${item}`}
            srcSet={`${item}`}
            alt={index}
            loading="lazy"
          />
        ))}
      </Box>
    </Box>
  )
}

export default Footer
