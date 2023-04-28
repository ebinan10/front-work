import Axios from './Axios'
import { useContext,useEffect } from 'react'
import { UserDetailContext } from './ApiContext'


 export const UseRefreshToken = () => {
   const [ data,setData] = useContext(UserDetailContext)



  const refresh =async () =>{
    let response;
        
         response =  await Axios.get('token')
      console.log(response)
     
        setData(prev=>{  
            return {...prev, accessToken:response.data.newAccessToken, 
            username:response.data.username,id:response.data._id,email:response.data.email,isLogin:response.data.isLogin 
          }
        })
        // console.log(response.data.newAccessToken)
         return response.data.newAccessToken;
       
} 
 return refresh() 
    


     
}
