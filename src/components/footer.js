import { Divider, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {


  const links = {
    Sports: [
      'Football',
      'Basketball',
      'Tennis',
      'Golf',
      'Swim'
    ],
    Politics: [
      'Government',
      'President',
      'DPR',
      'Patrai',
      'Democrat'
    ],
    Health: [
      'Covid-19',
      'Cough',
      'Dizzy',
      'Sprain',
      'Typhus'
    ],
    Environment: [
      'River',
      'Sea',
      'Mainland',
      'Mountains',
      'Ricefield'
    ],
    Business: [
      'Start Up',
      'Agency',
      'Market',
      'Ecommerce',
      'Creative'
    ],
    Education: [
      'UIUX',
      'Test',
      'SNBP',
      'University',
      'School'
    ],
    'E-sport': [
      'Mobile LE',
      'Free Fire',
      'PES',
      'PUBG',
      'Dota 2'
    ]

  }

  return (
    <>
      <div className='mweb-hide'> 
      <Divider variant="middle" light={false} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        {
          Object.keys(links).map(
            (item) =>
              <div style={{
                marginTop: '60px'
              }}>
                <Typography variant='subtitle1' sx={{
                  marginBottom: '15px', fontWeight: '600'
                }} >{item}</Typography>
                {
                  links[item].map(
                    (link) => (
                      <Typography sx={{
                        fontWeight: 'normal',
                        marginBottom: '10px'
                      }} variant='subtitle2' >{link}</Typography>
                    )
                  )
                }
              </div>
          )
        }
      </div>
    </div>
      <div style={{
        width: '100%',
        backgroundColor: '#25242b',
        height: 'max-content',
        margin: '0 auto',
        color: '#fff',
        textAlign: 'center'
      }}>
        <Typography variant='body2' >
          Created by Rohit Ludbe | Made with Gatsby
        </Typography>
      </div>
    </>
  )
}

export default Footer