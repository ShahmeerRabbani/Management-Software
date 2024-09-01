import React, {useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Components/FirebaseConfig/FirebaseConfig";
import InputFrom from "../../Components/Input/InputForm";
import { useNavigate } from "react-router-dom";
import { Radio } from '@mui/material';

const StudentRegistration = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [room, setRoom] = useState(0)
  const [radio, setRadio] = useState('')


  const navigate =useNavigate()

  const userRegistration = {
    firstName,
    lastName,
    email,
    room,
    radio
  }

  const handleRadioValue = (e) => {
    setRadio(e.target.value)
  }
  
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    
    if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || room.trim() === 0 || radio === ''){
      alert('Please fill all value')
    }
     else{
       try {
         const addRegister = addDoc(collection(db, "studentRegister"), userRegistration)
           .then((response) => {
             alert("Student Add Successfully..");
            navigate('/student/studentList')
           })
           .catch((err) => console.log(err));
          } catch (error) {
         console.log(error);
       }
     }
  };

  return (
    <div className="App">
    <Navbar/> 
   <div className="main_display">
   <Sidebar/>
   <form className='Content'>
          <div className='Regis_Form'>
          <p className='Form-heading'>Registration Form</p>
          <InputFrom onchange = {(e) => setFirstName(e.target.value)} label='First Name:' placeholder='Enter your first Name' type='text'/>
          <InputFrom onchange = {(e) => setLastName(e.target.value)} label='Last Name:' placeholder='Enter your last name' type='text'/>
          <InputFrom onchange = {(e) => setEmail(e.target.value)} label='Email:' placeholder='Enter your email' type='email'/>
          <InputFrom onchange = {(e) => setRoom(e.target.value)} label='Class' placeholder='Enter your class' type='number'/>
          <p>
        <label htmlFor="Gender" style={{color: '#016B1F', fontSize: 24}}>Gender</label>
        <p>
          <Radio checked={radio === 'Male'} onChange={handleRadioValue} value='Male' color="success"/>
          <label htmlFor="Male">Male</label>
        </p>
        <p>
          <Radio checked={radio === 'Female'} onChange={handleRadioValue} value='Female' color="success"/>
          <label htmlFor="Female">Female</label>
        </p>
       </p>
          <button className='submit_btn' onClick={handleSubmitRegister}>Submit</button>
          </div>
        </form>
   </div>
</div>
  )
}

export default StudentRegistration
