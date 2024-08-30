import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Button } from '@mui/material'
import DataTable from '../../Components/Table/Table'
import { useNavigate } from 'react-router-dom'

const SyllabusList = () => {

  const navigate = useNavigate();
  return (
    <div className="App">
    <Navbar/> 
   <div className="main_display">
   <Sidebar/>
   <div className='Content'>
    <div className='Content_Data'>
   <p className='Form-heading'>Syllabus List</p>
   <p className="add_btn_parent"><Button variant="contained" className="add_btn" onClick={() => navigate('/syllabus/syllabusAdd')}>Add</Button></p>
   <div className="content_table">
    <DataTable/>
   </div>
    </div>
   </div>
   </div>
</div>
  )
}

export default SyllabusList
