import React from 'react';
import UsePrivate from '../hooks/UsePrivate';

const Logout = () => {
    const logOutBt = ()=>{
        const logout = usePrivate.delete()
    }
  return (
    <div>Logout</div>
  )
}

export default Logout