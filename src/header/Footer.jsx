import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {UseRefreshToken} from '../hooks/UseRefreshToken'

const Footer =()=> {
 
  
  return (
    <div id='footer'>
      <div className='footer'> 
               <div className='footerIcon'>     
                <i className="large material-icons primary">insert_facebook</i>
                <i className="large material-icons secondary">insert_twitter</i>
              <i className="large material-icons primary">insert_tiktok</i>
                    </div>    
                  </div>
         <div className='footer'>
         
                        <ul className='ul'>
                        <li>Phone Number</li>
                        <li>+234824585949</li>
                        <li>+234814512642</li>
                        <li>+234814512642</li>
                        </ul>
                    
         </div>
         <div className='footer'>
         
                        <ul className='ul'>
                        <li>Workout Training</li>
                        <li></li>
                        <li></li>
                        </ul>
                    
         </div>
         <div className='footer'>
         
                        <ul className='ul'>
                            <li>Easy Training</li>
                            <li></li>
                            <li></li>
                        </ul>
                    
         </div>
          <div  id='footerLogo'>
                &copy;2023
          </div>
    </div>
  )
}

export default Footer