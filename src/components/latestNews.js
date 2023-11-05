import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../styles/styles.css'
import dayjs from 'dayjs';
import { Link } from 'gatsby';



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
        height: '60%',
        width: '100%'
      }}>
        <CardMedia component="img" image={news?.multimedia?.filter(im => im?.format == 'threeByTwoSmallAt2X')?.[0]?.url} sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover !important',
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
          }}>{news?.byline}</Typography>
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
      <div className='heading'>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Latest News</Typography>
        <Link to='/news' style={{
          textDecoration: 'none'
        }}> 
          <Typography variant='subtitle2' sx={{
            color: '#B80000',

          }}>see more</Typography>
        </Link>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

      }}>
        {
          newss && newss?.map(
            (item, index) => (<CardWidget key={Math.random()} news={item} />)
          )
        }

      </div>
    </div >
  )
}

export default LatestNews