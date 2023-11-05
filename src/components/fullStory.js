import { Box, Card, CardContent, CardMedia, Typography, } from '@mui/material'
import React from 'react'
import '../styles/styles.css'
import { Link } from 'gatsby'


const FullStory = ({ newss }) => {

  const CardWidget = ({ news }) => {

    return (<Card sx={{
      height: '200px',
      width: '250px',
      marginBottom: '30px',
      border: 'none',
      boxShadow: 'none',
      '@media (max-width: 767px)': {
        width: '90%',
        height: 'auto',
        marginBottom: '0px',
      }
    }}
      onClick={() => {
        window.open(news?.url)
      }}
    >
      <Box sx={{
        height: '60%'
      }}>
        <CardMedia component="img" image={news?.multimedia?.filter(im => im?.format == 'threeByTwoSmallAt2X')?.[0]?.url} sx={{
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
        justifyContent: 'space-between',
        width: '95%',
        margin: '0 auto'
      }}>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Full Story</Typography>
        <Link to='/news' style={{
          textDecoration: 'none'
        }}> 
          <Typography variant='subtitle2' sx={{
            color: '#B80000',
          }}>see more</Typography>
        </Link>
      </div>
      <div className='fs-ud'>
        <div >
          <Card sx={{
            height: '400px',
            width: '450px',
            marginBottom: '30px',
            border: 'none',
            boxShadow: 'none',
            '@media (max-width: 767px)': {
              width: '90% !important',
              height: 'auto',
              margin: '0 auto'
            }
          }}
            onClick={() => {
              window.open(oneNews?.url)
            }}
          >
            <Box sx={{
              height: '60%'
            }}>
              <CardMedia component="img" image={oneNews?.multimedia?.[0]?.url} sx={{
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
          className='fs-bd' 
        >
          {
            list?.map((item) =>
            (<>
              <CardWidget news={item} />
            </>)
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FullStory