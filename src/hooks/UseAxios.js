
import axios from 'axios'

const Url = 'http://localhost:3001'
export const UseAxios = axios.create({
  headers: {'Content-Type':'application/json'},
  baseURL: Url,
  withCredentials:true,
  credentials: 'include'
 });
          