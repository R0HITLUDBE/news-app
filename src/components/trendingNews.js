import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'

const TrendingNews = () => {
  return (
    <div className='trendingNews'>
      <Card sx={{
        display: 'flex',
        height: '260px',
        width: '90%',
        margin: '0 auto',
        border: 'none',
        boxShadow: 'none'
      }}>
        <div style={{
          width: "60%",
        }}>
          <CardMedia
            component="img"
            sx={{ width: '400px', objectFit: 'cover', height: '100%', borderRadius: '8px' }}
            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
            alt="Live from space album cover"
          />
        </div>
        <CardContent sx={{
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Typography sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}><Avatar src='' sx={{
              height: '30px',
              width: '30px'
            }} /> Netflix</Typography>
            <FiberManualRecordIcon sx={{
              height: '10px'
            }} />
            <Typography>15 minutes ago</Typography>
          </div>

          <Typography variant='h5' sx={{
            marginTop: '10px',
            textWrap: 'balance'
          }}>
            Money Heist spin-off series Berlin:
            Netflix release date, trailer, cast details
            from Tudum
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrendingNews