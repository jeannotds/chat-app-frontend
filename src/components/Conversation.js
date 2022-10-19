import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profil from '../images/Jeannot.jpeg'
import axios from 'axios'
function Conversation() {


  const [ user, setUser ] = useState([]) 

  useEffect(() => {

      const getUsers=async()=>{
          try {
              const response=await axios.get("http://localhost:3005/api/auth")
              setUser(response.data)
          } catch (error) {
             console.log(error) 
          }
      }
      getUsers()
  }, [])

  console.log(user);



  return (
    <div className='recent-down'>
        <h4>Recent</h4>
              {user.map((list) => (
                            <div className='friend' key={list._id}>
                                <div className='my-friend' >
                                    <img src={profil} alt="profil" title="profil" className='profil-recent' />
                                    <div className='name-friend'>
                                        <span className='name'>
                                            {list.name}
                                        </span>
                                        <div className='alert-msg'>Last message</div>
                                    </div>
                                </div>
                                  <div className='container-hr'>
                                      <div className='hr'></div>
                                  </div>
              </div>
        ))}
                            
    </div>
  )
}

export default Conversation