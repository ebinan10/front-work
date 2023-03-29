import React,{useContext} from 'react'
import '../App.css'
import { useNavigate,useLocation } from 'react-router-dom'
import UsePrivate from '../hooks/UsePrivate'
import { UserDetailContext } from '../hooks/ApiContext'
import { useState, useEffect } from 'react'
const UpdateProfile = () => {
    const [data, setData] = useContext(UserDetailContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const usePrivate = UsePrivate();
    const navigate = useNavigate(); 
    const location = useLocation()
   
    const UpdatePassword = async(e)=>{
        e.preventDefault()
        navigate(`/profile/password`)
      }
      
      // const  UpdateWorkout=async(e)=>{
      //     e.preventDefault()  
      //     const navigate = useNavigate()
            
      //      const Update = await usePrivate.patch(`/update/${data.id}`,
      //      {email,username})
      //        console.log(Update);
      //        navigate(`/`)
      // }
       
      
      useEffect(() => {
        let isLoaded = true
        const User = async()=>{ 
          try{
            const Update = await usePrivate.get(`/user/${data.id}`);
            setEmail(Update.data.email)
            setUsername(Update.data.username)
      console.log(Update)
        }
        catch(err){
          console.error(err)
    
         
        }
        
      }
       isLoaded && User()
        return ()=>{
          isLoaded = false
        }
      }, [])

    const PostUpdate=async(e)=>{
      e.preventDefault()   
    
     const Update = await usePrivate.patch(`/user/detail/${data.id}`,
         {email,username})
           console.log(Update);
           navigate(`/`)
    
    } 

  return (
    <div>
         <div className='profile'> 
         <div className='container'>
         <form className='form' id='formUpdate'>
        < div className='formClass'> 
          Username: <input className='inputWork' type="text" placeholder='User'
          value={username} name = 'user'  onChange={(e)=>setUsername(e.target.value)}/></div>
        < div className='formClass'>
          Email: <input className='inputWork' type="text" placeholder='Email'
          value={email} name = 'email'  onChange={(e)=>setEmail(e.target.value)}/></div>
         <div className='btn'>
         <button type="submit" onClick={UpdatePassword} className='button'>Change Password</button>
         <button type="submit" onClick={PostUpdate} className='button'>Update Details</button>
         </div> 
         </form>
     </div> 
    </div></div>
  )
}

export default UpdateProfile