import { Avatar, Divider, Link } from '@mui/material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import Logo from '../images/news.svg'
import '../styles/styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img style={{
          width: '60px'
        }} src={Logo} alt="" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link variant='body1' className='link-tag' href='/' underline='none'>Stories</Link>
        <Link variant='body1' className='link-tag' href='/' underline='none'>Creator</Link>
        <Link variant='body1' className='link-tag' href='/' underline='none'>Community</Link>
        <Link variant='body1' className='link-tag' href='/' underline='none'>Subscribe</Link>
      </div>
      <div className='navbar-right'>
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