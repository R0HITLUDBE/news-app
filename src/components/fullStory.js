import { Box, Card, CardContent, CardMedia, Typography, formControlClasses } from '@mui/material'
import React from 'react'
import '../styles/styles.css'
const FullStory = () => {

  const CardWidget = () => {

    return (<Card sx={{
      height: '200px',
      width: '250px',
      marginBottom: '30px',
      border: 'none',
      boxShadow: 'none'
    }}>
      <Box sx={{
        height: '60%'
      }}>
        <CardMedia component="img" image='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg' sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '4px'
        }} />
      </Box>
      <CardContent>

        <Typography variant='body2' sx={{
          fontWeight: '400',

        }}>
          WeChat: Why does Elon Musk want X to emulate China's everything-app?
        </Typography>
      </CardContent>
    </Card>)
  }

  return (
    <div className='fullStory'>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Full Story</Typography>
        <Typography variant='subtitle2' sx={{
          color: '#B80000'
        }}>see more</Typography>
      </div>
      <div style={{
        display: 'flex',
      }}>
        <div>
          <Card sx={{
            height: '400px',
            width: '450px',
            marginBottom: '30px',
            border: 'none',
            boxShadow: 'none'
          }}>
            <Box sx={{
              height: '60%'
            }}>
              <CardMedia component="img" image='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg' sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '4px'
              }} />
            </Box>
            <CardContent>

              <Typography variant='body2' sx={{
                fontWeight: '400',

              }}>
                WeChat: Why does Elon Musk want X to emulate China's everything-app?
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',

          }}
        >
          {
            [1, 2, 3, 4].map((item) =>
              <CardWidget />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FullStory