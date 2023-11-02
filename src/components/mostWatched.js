import { Typography } from '@mui/material'
import React from 'react'
import '../styles/styles.css'

const MostWatched = () => {

  const WatchedWidget = ({ item }) => {
    return (
      <div style={{
        display: 'flex',
        width: '180px',
        gap: '10px'
      }}>
        <Typography variant='h2' sx={{
          color: '#B80000'
        }}>{item}</Typography>
        <Typography variant='body1' style={{
          textWrap: 'balance'
        }}>
          Ukraine's Motherland monument gets a makeover.
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
          [0, 1, 2, 3, 4].map(
            (item) => (
              <WatchedWidget item={item} />)
          )
        }
      </div>
    </div >
  )
}

export default MostWatched