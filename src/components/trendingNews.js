import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'
import dayjs from 'dayjs';

const TrendingNews = ({ news }) => {


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
            image={news?.urlToImage}
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
            }}>
              {news?.source?.name}
            </Typography>
            <FiberManualRecordIcon sx={{
              height: '10px'
            }} />
            <Typography>{dayjs(news?.publishedAt).format('YYYY MMM, DD')}</Typography>
          </div>

          <Typography variant='h5' sx={{
            marginTop: '10px',
            textWrap: 'balance'
          }}>
            {news?.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrendingNews