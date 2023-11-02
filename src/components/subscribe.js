import { Button, FilledInput, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import Logo from '../images/news.svg'

const Subscribe = () => {
  return (
    <div style={{
      width: 'max-content',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '50px'
    }}>
      <img style={{
        width: '100px'
      }} src={Logo} alt="" />
      <Typography variant='h6' >Let’s subscribe so you don’t miss the latest updates</Typography>
      <div style={{
        width: '100%',
        marginTop: '20px'
      }}>
        <OutlinedInput
          placeholder='Your Email'
          sx={{
            border: 'none',
            width: '100%'
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
      </div>
    </div>
  )
}

export default Subscribe