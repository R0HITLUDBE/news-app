import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'




const LatestNews = () => {

  const CardWidget = () => {
    return (<Card sx={{
      height: '330px',
      width: '330px',
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center'
        }}>
          <Typography variant='body1' sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontWeight: 'bold',
            color: '#B80000'
          }}>Netflix</Typography>
          <FiberManualRecordIcon sx={{
            height: '10px'
          }} />
          <Typography variant='body2'>15 minutes ago</Typography>
        </div>
        <Typography variant='body1' sx={{
          fontWeight: '600',

        }}>
          WeChat: Why does Elon Musk want X to emulate China's everything-app?
        </Typography>
      </CardContent>
    </Card>)
  }

  return (
    <div className='latestNews'>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Latest News</Typography>
        <Typography variant='subtitle2' sx={{
          color: '#B80000'
        }}>see more</Typography>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

      }}>
        {
          [0, 1, 2, 3, 4, 5].map(
            item => (<CardWidget />)
          )
        }

      </div>
    </div >
  )
}

export default LatestNews