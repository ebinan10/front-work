import React,{useContext} from 'react'
import '../App.css'
import { useNavigate,useLocation } from 'react-router-dom'
import {UseAxios} from '../hooks/UseAxios';
import { useState, useEffect } from 'react'

const SendPasswordEmail = () => { 
    const [email, setEmail] = useState('')
    // const usePrivate = UsePrivate();
    const navigate = useNavigate(); 
    const location = useLocation()

  useEffect(()=>{
    
  })
      const SendMail=async(e)=>{
        e.preventDefault()   
      
       const sendMail = await UseAxios.post(`user/password/token`,
           {email})
             console.log(sendMail);
             console.log(email)
            //  navigate(`/`)  
      }

      const setValue = (e)=>{
        setEmail(e.target.value)
        console.log(email)
      }
  return (
    <div>
         <div className='profile'> 
         <form className='form' id='formUpdate'>
      <div className='description'>Change Password</div>
       < div className='formClass'>
          Email: <input className='inputWork' type="text" placeholder='Email'
          value={email}  onChange ={(e)=>setValue(e)} /></div>
         <div className='btn'>
         <button type="submit" onClick={SendMail} className='button'>Send</button>
         </div>
         </form>
     </div> 
    </div>
  )
}

export default SendPasswordEmail;