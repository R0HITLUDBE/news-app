import { Box, Button, Divider, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import Logo from '../images/news.svg'

const Subscribe = () => {
  return (
    <Box sx={{
      width: 'max-content',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '50px',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    }}>
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
      }}>
      <img style={{
        width: '100px'
      }} src={Logo} alt="" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <img src="https://developer.nytimes.com/files/poweredby_nytimes_150a.png?v=1583354208339" style={{
          height: "auto", width: 'auto', objectFit: 'contain'
        }} alt="logo" />
      </div>
      <Typography variant='h6' style={{
        textAlign: 'center'
      }} >Let’s subscribe so you don’t miss the latest updates</Typography>
      <Box sx={{
        width: '100%',
        margin: '20px auto',
        '@media (max-width: 767px)': {
          width: '90%',
          margin: '20px auto'
        }
      }}>
        <OutlinedInput
          placeholder='Your Email'
          sx={{
            border: 'none',
            width: '100%',
          }}
          type='text'
          endAdornment={
            <Button sx={{
              height: '100%',
              margin: '0',
              color: '#B80000'
            }}>
              Submit
            </Button>
          }
        />
      </Box>
    </Box>
  )
}

export default Subscribe