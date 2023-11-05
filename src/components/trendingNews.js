import React, { useContext } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'
import dayjs from 'dayjs';
import { NewsContext } from '../pages';

const TrendingNews = ({ news: newsData }) => {


  // const newsData = news?.[0];

  return (
    <div className='trendingNews'>
      <Card sx={{
        display: 'flex',
        height: '260px',
        width: '90%',
        margin: '0 auto',
        border: 'none',
        boxShadow: 'none',
        '@media (max-width: 767px)': {
          display: 'block',
          height: '100%'
        }
      }}>
        <div style={{
          width: "60%",
        }}>
          <CardMedia
            component="img"
            sx={{ width: '400px', objectFit: 'cover', height: '100%', borderRadius: '8px' }}
            image={newsData?.multimedia?.[0]?.url}
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
              {newsData?.byline}
            </Typography>
            <FiberManualRecordIcon sx={{
              height: '10px'
            }} />
            <Typography>{dayjs(newsData?.publishedAt).format('YYYY MMM, DD')}</Typography>
          </div>

          <Typography variant='h5' sx={{
            marginTop: '10px',
            textWrap: 'balance'
          }}>
            {newsData?.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrendingNews