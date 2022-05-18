import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context-user/User/UserContext'

const UserList = () => {
  
    const { users,  getUsers, getProfile } = useContext(UserContext)
    
    useEffect(()=>{
        getUsers();
        
    },[])

    return (
      <div className='list-group h-100'>
        {
          users.map(user => (
            <a className='list-group-item list-group-item-action' href='#!' key={user.id} onClick={()=> getProfile(user.id)}>
              <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" alt='user_photo' />
              <p>
              {`${user.first_name} ${user.last_name}`}
              </p>
            </a>
          ))
        }
      </div>


  )
}

export default UserList