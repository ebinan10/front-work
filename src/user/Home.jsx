import React from 'react';
import {useState, useEffect, useContext} from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { UserDetailContext } from '../hooks/ApiContext'; 
import  UsePrivate from '../hooks/UsePrivate';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';

const Home = () =>{
  const usePrivate = UsePrivate() 
  
   const [title,setTitle] = useState(''); 
   const [reps,setReps] = useState('');
   const [load,setLoad]= useState('');
   const [data] = useContext(UserDetailContext);
   const [isLogin, setIsLogin] = useState(false);
   const [workout,setWorkout] = useState([]);
   const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ])
   const [openDate, setOpenDate] = useState(false)
   const [startDate, setStartDate] = useState(new Date()); 
   const navigate = useNavigate() 
   
   useEffect(() => {

       
    const controller = new AbortController() 
          let isLoaded = true;
    
        const Workout = async()=>{ 
          try{
        const workout =  await usePrivate.get(`user/workout/${data.id}`, {
          signal: controller.signal
        }
        );
      console.log(workout)
        if(workout.status === 200){
          setIsLogin(true)
         isLoaded && setWorkout(workout.data) 
        }}
        catch(err){
          console.error(err)

        }
      }
         isLoaded && Workout()
    
   return () =>{
    isLoaded = false;
    controller.abort()
   }
},[data]) 

  
  
const CreateWorkout = async(e) =>
        { 
const controller = new AbortController()
          try{
             e.preventDefault()
            
            if(title!=='' && reps!==0 && load !==0 ){

              e.preventDefault()
              const userId = data.id 
              console.log(userId)
            const createWorkout =  await usePrivate.post('/',
            {
                title, reps, load, userId
            }, {    
              signal: controller.signal
            }
            )
            console.log(createWorkout)
            setTitle('');
            setReps('');
            setLoad('');
           }}
           catch(err){
           
            console.log(err);

            // nav()

           }
           
        }  



  return (
    
    <div className='home'> 
   
      <div className='section'>
         
     {isLogin?(<> <section >{
          workout.map((workout,_id) =>
          <div className='map' 
          key={workout._id} > 
              <ul className='ul'><li className='workoutLi'>{workout.title}</li>
              <li className='workoutLi'>{workout.reps}(kg/l)</li>
              <li className='workoutLi'>{workout.load}</li>
              {/* <button className='buttonLi' id='btn'>  */}
              <Link className='link' to={`/getwork/${workout._id}`} workout={workout} >Details</Link>
              {/* </button>   */} 
              </ul>
              </div>
         
           )
         }
          </section>
      <main className='main'>
          <form className='form1'>Create Workout
          <input type="text" className='inputWork' placeholder='Title' 
          required value={title} 
          onChange={(e)=>setTitle(e.target.value)}/>
          <input type="number" className='inputWork' placeholder='Reps' 
          required value={reps} 
          onChange={(e)=>setReps(e.target.value)}/>
          <input type="number" className='inputWork'  placeholder='Load' 
          required value={load} 
          onChange={(e)=>setLoad(e.target.value)}/>
          <FontAwesomeIcon icon={faCalendarDays} className="calendarIcon"/>
        <span onClick={()=>setOpenDate(!openDate)} className="dateSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            /> }
          <input disabled={load ==='' || reps ==='' || title ===''} 
          type="submit" className='buttonHome' onClick={CreateWorkout}/>
          </form>
      </main>
          </> ):(<></>)}
    </div> 
    </div>
  )
        }

export default Home;