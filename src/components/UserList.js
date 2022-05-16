import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context-user/User/UserContext'

const UserList = () => {
  
    const { getUsers } = useContext(UserContext)
    
    useEffect(()=>{
        getUsers();
    },[])

    return (
    <div>UserList</div>
  )
}

export default UserList