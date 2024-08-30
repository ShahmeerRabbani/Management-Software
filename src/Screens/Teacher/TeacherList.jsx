import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DataTable from '../../Components/Table/Table'
import { Button } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Components/FirebaseConfig/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

const TeacherList = () => {

  const [teacherData, setTeacherData] = useState([])
  
  const navigate = useNavigate()

  useEffect(()=>{
    handleGetStaffData()
  }, [])

  const handleGetStaffData =async () => {

    const getStaffData = await getDocs(collection(db, "teacherRegister"))
    let arr=[]
    getStaffData.forEach((doc) => {
      arr.push({...doc.data(), id:doc.id})
      setTeacherData(arr)
    })
  }
  console.log(teacherData)
   

  return (
    <div className="App">
    <Navbar/> 
   <div className="main_display">
   <Sidebar/>
   <div className='Content'>
    <div className='Content_Data'>
   <p className='Form-heading'>Teacher List</p>
   <p className="add_btn_parent"><Button variant="contained" className="add_btn" onClick={() => navigate('/teacher/teacherRegistration')}>Add</Button></p>
   <div className="content_table">
    <DataTable dataRow={teacherData} changeProp='Age'/>
   </div>
    </div>
   </div>
   </div>
</div>
  )
}

export default TeacherList
