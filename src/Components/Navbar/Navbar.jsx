import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { IoSchool } from 'react-icons/io5'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [letter, setLetter] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    getUserName()
  }, [])

  const getUserName = () => {
    const {firstName, lastName} = JSON.parse(localStorage.getItem('user'))
     setLetter(firstName.slice(0, 1))
  }
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <IoSchool size={26}/>
        <span>Learning Management System</span>
      </div>
      <div className={styles.logOut}>
      <Avatar sx={{color: '#000', fontWeight: 700, fontSize: 22}} title='log out' onClick={()=> navigate('/')}>{letter}</Avatar>
      </div>
    </div>
  )
}

export default Navbar
