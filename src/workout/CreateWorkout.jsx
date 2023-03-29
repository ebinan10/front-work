import React, { useState,useContext } from 'react'
import Axios from '../api/Axios'
import {useEffect} from 'react'
import { UserDetailContext } from '../hooks/ApiContext';

function CreateWorkout() {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState(0);
    const [load, setLoad] = useState(0);
    const {token} = useContext(UserDetailContext);

    
     
  return (
    <div><form>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='Reps'  value={reps} onChange={(e)=>setReps(e.target.value)}/>
        <input type="text"  placeholder='Load' value={load} onChange={(e)=>setLoad(e.target.value)}/>
        <input type="submit" placeholder='Submit' onChange={(e)=>setTitle(e.target.value)}/>
        </form></div>
  )
}

export default CreateWorkout