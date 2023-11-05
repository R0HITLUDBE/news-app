import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import dayjs from 'dayjs';
import Layout from '../components/Layout';


const News = () => {


  return (
    <Layout>{(news) =>
    (<div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginTop: '80px'
    }} >
      {
        news && news?.map(
          item => (
            <div key={Math.random()}>
              <CardWidget news={item} />
            </div>
          )
        )
      }
    </div>)
    }
    </Layout>
  )
}

export default News;

export const Head = () => <title>Newwws</title>

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
      <CardMedia component="img" image={news?.multimedia?.filter(im => im?.format === 'threeByTwoSmallAt2X')?.[0]?.url} sx={{
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