import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'
import dayjs from 'dayjs';



const LatestNews = ({ newss }) => {



  const CardWidget = ({ news }) => {

    return (<Card sx={{
      height: '330px',
      width: '330px',
      marginBottom: '30px',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer'
    }} onClick={() => {
      window.open(news?.url)
    }} >
      <Box sx={{
        height: '60%'
      }}>
        <CardMedia component="img" image={news?.urlToImage} sx={{
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
          }}>{news?.source?.name}</Typography>
          <FiberManualRecordIcon sx={{
            height: '10px'
          }} />
          <Typography variant='body2'>{dayjs(news?.publishedAt).format('YYYY MMM, DD')}</Typography>
        </div>
        <Typography variant='body1' sx={{
          fontWeight: '600',

        }}>
          {news?.title}
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
          newss && newss?.map(
            item => (<CardWidget news={item} />)
          )
        }

      </div>
    </div >
  )
}

export default LatestNews