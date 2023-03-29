import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CreateWorkout  from './workout/CreateWorkout'
import WorkOut from './workout/WorkOut'
import  GetWorkout from './workout/GetWorkout'
import UpdateWorkOut from './workout/UpdateWorkOut'
import Profile from './user/Profile'
import UpdateProfile from './user/UpdateProfile'
import User from './user/User'
import SignUp from './user/SignUp'
import Login from './user/Login'
import Home from './user/Home'
import Error from './error/Error'
import Nav from './header/Nav'
import Footer from './header/Footer'
import About from './header/About'
import Protected from './user/Protected'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import SendPasswordEmail from './user/SendPasswordEmail';
import SetUserPassword from './user/SetUserPassword';


const Wrapper = () => {
  
    return (
      <div className="App">
        
        <Router>
          <Nav/>
                <Routes>
                <Route exact path='/'  >
                  
                <Route exact path='login' element={<Login/>} /> 
                <Route exact path='' element={ <Home/>} /> 
                <Route exact path='profile' element={<Profile/>}/>
                <Route exact path='profile/update' element={<UpdateProfile/>}/>
                <Route exact path='create' element={<CreateWorkout/>} />
                <Route exact path='getwork' element={<GetWorkout/>}/>
                <Route exact path='about' element={<About/>}/>
                <Route exact path='update/:id' element={<UpdateWorkOut/>}/>
                <Route exact path='getwork/:id' element={<GetWorkout/>} />
                <Route exact path='getuser' element={<WorkOut/>} />

                <Route exact path='user' element={<SignUp/>} />
                <Route exact path='profile/password' element={<SendPasswordEmail/>} />
                <Route exact path='password/:token' element={<SetUserPassword/>} />
                <Route exact path='login' element={<Login/>} />
                
                
                <Route exact path='*' element={<Error/>}/>
                </Route>
            </Routes>
            <Footer/>
        </Router>
      </div>
    );
  }
  
  export default Wrapper;
   