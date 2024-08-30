import React from 'react'
import styles from './Navbar.module.css'
import { IoSchool } from 'react-icons/io5'
import { Avatar } from '@mui/material'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <IoSchool size={26}/>
        <span>Learning Managememnt System</span>
      </div>
      <div className={styles.logOut}>
      <Avatar sx={{color: '#000', fontWeight: 700, fontSize: 22}}>S</Avatar>
      </div>
    </div>
  )
}

export default Navbar
