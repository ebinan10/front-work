import axios from 'axios';
import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { UserDetailContext } from '../hooks/ApiContext';
import {Link,useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [iscreated, setIscreated] = useState(false);
    const [data] = useContext(UserDetailContext)
    const nav = useNavigate()
    useEffect(()=>{
      if(data.isLogin){
        nav('/')
      }
    },[data])
   const user = {
                email:email,
                username:username,
                password:password
             } 
             
    const  SubmitUserDetail = async (e) =>{
        try{ 
          const userDetails =  await axios.post('http://localhost:3001/user', 
        {
          email:email,
          username:username,
          password:password
       } 
        )
        console.log(userDetails)
        setEmail('');
        setUsername('');
        setPassword('');
        setIscreated(true)
      }
        catch(err){
          console.log(err)
        }
          
             }
         
    
    
    
    
    
  return (
    <div  id='signup' >
        {!iscreated?(<div className='container'><form className ='form'>
          <div className='description'>User Signup</div>
    <input className ='input' type="email" placeholder='example@mail.com' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
       
    <input className ='input' type="text" placeholder='@Username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
       
    <input className ='input'   type="password" placeholder=' @Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Link to='/user'  onClick={SubmitUserDetail}><button className ='button'>Submit</button></Link>
    </form></div>):(<div className='success'><p>user created successfully</p> </div>)}
    </div>
  )
}
export default SignUp;