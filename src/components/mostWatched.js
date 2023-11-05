import { Typography } from '@mui/material'
import React from 'react'
import '../styles/styles.css'
import { Link } from 'gatsby'

const MostWatched = ({ newss = [] }) => {


  const WatchedWidget = ({ num, news }) => {

    return (
      <div className='watchedwidget' onClick={() => {
        window.open(news?.url)
      }}>
        <Typography variant='h2' sx={{
          color: '#B80000',
          width: '20%'
        }}>{num}</Typography>
        <Typography variant='body1' style={{
          textOverflow: 'clip'
        }}>
          {news?.title}
        </Typography>
      </div>
    )
  }

  return (
    <div className='mostWatched'>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        margin: '0 auto'
      }}>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Most Watched</Typography>
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
        justifyContent: 'space-evenly'
      }}>
        {
          newss && newss?.map(
            (item, index) => (
              <WatchedWidget key={Math.random()} num={index + 1} news={item} />)
          )
        }
      </div>
    </div >
  )
}

export default MostWatched