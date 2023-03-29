import {UseAxios} from '../hooks/UseAxios'; 
import Axios from './Axios'
import {useEffect,useContext,useCallback} from 'react'
import {UseRefreshToken} from '../hooks/UseRefreshToken'
import { UserDetailContext } from '../hooks/ApiContext'; 
import {useLocation, useNavigate } from 'react-router-dom';

const UsePrivate = () => {
    
    
    // const controller = new AbortController()

    
      const [data,setData] = useContext(UserDetailContext) 
      const navigate = useNavigate();
          const location = useLocation();
          const refresh =async () =>{
            let response;
                
                 response =  await Axios.get('refreshtoken')
              console.log(response)
             
                setData(prev=>{  
                    return {...prev, accessToken:response.data.newAccessToken, 
                    username:response.data.username,id:response.data._id,email:response.data.email,isLogin:response.data.isLogin 
                  }
                })
                // console.log(response.data.newAccessToken)
                 return response.data.newAccessToken;
               
        } 
          
        
        
useEffect( () => {
      
            let isMounted = true;
            // const controller = new AbortController()
            const GetRefreshToken =()=>{
                 try{
        const requestInterceptors = UseAxios.interceptors.request.use(
          config=>{
           
              if(!config.headers['Authorization']){
                config.headers[`Authorization`] = `Bearer ${data.accessToken}` 
                 
              }
              return config;
              
          },
          (error) => {
            Promise.reject(error)
          }
          
        )
        const responseInterceptors = UseAxios.interceptors.response.use(
          response=> response,
          async(error) =>{
            const prevRequest = error?.config;
            if(error?.response?.status === 401  && !prevRequest.sent){
                   
              prevRequest.sent = true; 
              console.log('error encountered');
              console.log("this is true");
              const NewAccesToken =  refresh(); 
              prevRequest.headers['Authorization'] = `Bearer ${NewAccesToken}`
              return UseAxios(prevRequest);
             }
            setData({})
             navigate('/login',{state:{from:location},replace:true})
            return  Promise.reject(error)
            
          }
           
        )
       
      
        return () => {
          UseAxios.interceptors.request.eject(requestInterceptors);
          UseAxios.interceptors.response.eject(responseInterceptors);
         
        }
      }catch(err){
        console.log(err)
      }
    } 
      
       isMounted && GetRefreshToken()
       return ()=>{
        isMounted = false
       } 
    },[])  
      
  return UseAxios;   
}     

export default UsePrivate