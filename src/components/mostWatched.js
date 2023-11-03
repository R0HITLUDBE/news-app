import { Typography } from '@mui/material'
import React from 'react'
import '../styles/styles.css'

const MostWatched = ({ newss = [] }) => {


  const WatchedWidget = ({ num, news }) => {

    return (
      <div style={{
        display: 'flex',
        width: '240px',
        gap: '10px',
        cursor: 'pointer'
      }} onClick={() => {
        window.open(news?.url)
      }}>
        <Typography variant='h2' sx={{
          color: '#B80000'
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
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5' style={{
          marginBottom: '70px'
        }}>Most Watched</Typography>
        <Typography variant='subtitle2' sx={{
          color: '#B80000'
        }}>see more</Typography>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
          newss && newss?.map(
            (item, index) => (
              <WatchedWidget key={index + 1} num={index + 1} news={item} />)
          )
        }
      </div>
    </div >
  )
}

export default MostWatched