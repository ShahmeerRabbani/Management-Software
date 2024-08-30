import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DataTable from "../../Components/Table/Table";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/FirebaseConfig/FirebaseConfig";

const StudentList = () => {

  
  const [studentData, setStudentData] = useState([])
  
  const navigate = useNavigate()
  
  useEffect(()=>{
    handleGetStudentData()
  }, [])

  const handleGetStudentData =async () => {

    const getStudentData = await getDocs(collection(db, "studentRegister"))
    let arr=[]
    getStudentData.forEach((doc) => {
      arr.push({...doc.data(), id:doc.id})
      setStudentData(arr)
    })
  }
  console.log(studentData);
  
   

  return (
    <div className="App">
      <Navbar />
      <div className="main_display">
        <Sidebar />
        <div className="Content">
          <div className="Content_Data">
            <p className="Form-heading">Student List</p>
            <p className="add_btn_parent"><Button variant="contained" className="add_btn" onClick={() => navigate('/student/studentRegistration')}>Add</Button></p>
            <div className="content_table">
              <DataTable dataRow={studentData} changeProp='class'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
