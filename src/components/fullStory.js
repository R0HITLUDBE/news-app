import { Box, Card, CardContent, CardMedia, Typography, } from '@mui/material'
import React from 'react'
import '../styles/styles.css'


const FullStory = ({ newss }) => {

  const CardWidget = ({ news }) => {

    return (<Card sx={{
      height: '200px',
      width: '250px',
      marginBottom: '30px',
      border: 'none',
      boxShadow: 'none'
    }}
      onClick={() => {
        window.open(news?.url)
      }}
    >
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

        <Typography variant='body2' sx={{
          fontWeight: '400',

        }}>
          {
            news?.title
          }
        </Typography>
      </CardContent>
    </Card>)
  }

  const oneNews = newss?.[0]
  const list = newss?.slice(1, 5)
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
          }}
            onClick={() => {
              window.open(oneNews?.url)
            }}
          >
            <Box sx={{
              height: '60%'
            }}>
              <CardMedia component="img" image={oneNews?.urlToImage} sx={{
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
                {oneNews?.title}
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
            list?.map((item) =>
              <CardWidget news={item} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FullStory