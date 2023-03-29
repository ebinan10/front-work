import React,{useState} from 'react'
import {UseAxios} from '../hooks/UseAxios'
import {  useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const SetUserPassword = () => {
  const {token} = useParams()
const [password, setPassword] = useState('');
const navigate = useNavigate();
const [passwordtype, setPasswordtype] = useState("password");
const SetValue = (e)=>{
  setPassword(e.target.value)
  console.log(password)
} 
        const VisiblePassword = () =>{
          if(passwordtype ==="password"){
          setPasswordtype("text") 
        } 
        else{
          setPasswordtype("password")
        }
        }
      
       const Update = async(e)=>{
        e.preventDefault()
        const update = await UseAxios.patch(`/user/password/${token}`,
           {password})
             console.log(update);
             console.log(password)
             navigate(`/`)  
      }
 
  return (
    <div><div className="profile"> 
    <form className="form" id="formUpdate">
        <div className="description">Change Password</div>
        <div className ="visible">
        <div className="formClass">
        Password:<input className ="inputWork"   type={passwordtype} placeholder='Password'
        value={password} onChange={SetValue} />
            <div className="icon" onClick={VisiblePassword}>
              <FontAwesomeIcon icon={faEye} />
            </div>
            </div>
            </div>
        <button type="submit" onClick={Update} className="button">Update</button>
    
    </form>
</div> </div>
  )
}

export default SetUserPassword