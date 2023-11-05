import { Avatar, Divider, Typography } from '@mui/material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import Logo from '../images/news.svg'
import '../styles/styles.css'
import { Link } from 'gatsby';

const Navbar = () => {


  const links = ['Stories', 'Creator', 'Community', 'Subscribe']

  return (
    <div className='navbar'>
      <div style={{
        display: 'flex'
      }}>
        <img style={{
          width: '60px'
        }} src={Logo} alt="" />
        <div className='navbar-left mweb-hide'>
        <Divider orientation="vertical" variant="middle" flexItem />
          {
            links?.map(
              link => (
                <Link className='link-tag' to='/news'>
                  <Typography variant='body1'>
                    {link}
                  </Typography>
                </Link>
              )
            )
          }
      </div>
      </div>
      <div className='navbar-right mweb-hide'>
        <p style={{
          display: 'flex',
          alignItems: 'center'
        }}> <EditNoteOutlinedIcon /> Write</p>
        <BookmarkOutlinedIcon />
        <NotificationsIcon />
        <Avatar alt="Remy Sharp" src={''} sx={{
          width: '35px',
          height: '35px'
        }} />
      </div>
    </div>
  )
}

export default Navbar