import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';
import {useParams, useNavigate,useLocation} from 'react-router-dom';    
import UpdateWorkOut from './UpdateWorkOut';
import { isEditable } from '@testing-library/user-event/dist/utils';
import {Link} from 'react-router-dom';
import  UsePrivate from '../hooks/UsePrivate';


function GetWorkOut() {  
  let isloaded = true;  
  const nav = useNavigate();
  const location = useLocation();
  const usePrivate = UsePrivate();
  const controller = new AbortController() 
  const [workout, setWorkout] = useState([]); 
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState(undefined);
  const [load, setLoad] = useState(undefined);
  const [data, setData] = useState({})
  const [isEditable, setIsEditable] = useState(false);
  const [userId, setUserId] = useState('') 
  const [isLogin, setIsLogin] = useState(false)
  const [isCreateWorkout, setIsCreateWorkout] = useState(true)
  const {id} = useParams()
  const navigate = useNavigate()
  const Data = createContext()
    
    console.log(id)
    const editWorkout = async(e) =>{
      e.preventDefault();
      console.log({title, reps, load});
      navigate(`/update/${id}`)
      
      }
      const deleteWorkout = async(e) =>{
        try{
          e.preventDefault();
        const workout = await usePrivate.delete(`${id}`)
          console.log(workout);
          navigate('/') 
        }
        catch(err){
          console.log(err)
        }
      }
     const updateWorkout = async(e) =>{
          try{
                  e.preventDefault()
              const workout = await usePrivate.patch(`${id}`,{
                title,reps,load,userId
            })
             console.log(workout)
                console.log('updated')
          }
          catch(err){
            console.log(err)
          }
      }



useEffect(() => {
  const GetWorkout = async() =>{
try{

console.log(id)
      const workout = await usePrivate.get(`workout/${id}`,
      {
        signal:controller.signal
      }
      )
      const result = await workout.data
      const {data }= await workout
      setData(workout.data) 
      setTitle(data.title)
      setReps(data.reps)
      setLoad(data.load)
      setUserId(data.userId)
      setIsCreateWorkout()
}
catch(err)
{
console.log(err)
}      
}
 isloaded && GetWorkout()
  return ()=>{
    isloaded = false;
    controller.abort() 
  }
},[])
  return (
    <div id='getwork'>
      <div className='container'>
          <div className='form'>
            <div className='description'>Workout Details</div>
          <ul >
            
            <li>Title:{title}</li>
            <li>Reps:{reps}</li>
            <li>Load:{load}</li>
          </ul>
          <div className='btn'>  
          <Link 
            className='btn'
            to = { `/update/${id}`} 
            state= {{title: title, reps : reps, load: load}}></Link> 
          <button className='button' onClick={editWorkout}> edit </button>
          <button className='button' onClick={deleteWorkout}>delete</button>
          </div></div>
          </div>
      </div>
  )
}

export default GetWorkOut;