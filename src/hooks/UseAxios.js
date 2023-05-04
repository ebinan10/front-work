
import axios from 'axios'

const Url = 'https://udehnanakumo.onrender.com/'
export const UseAxios = axios.create({
  headers: {'Content-Type':'application/json'},
  baseURL: Url,
  withCredentials:true,
  credentials: 'include'
 });
          
