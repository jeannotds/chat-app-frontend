import React, { useEffect, useState } from 'react'
import profil from '../images/Jeannot.jpeg'




function Conversation({ data, currentUserId }) {

    const [ userData, setuserData ] = useState(null)
    console.log("MEMBERS : ", data.members)
    console.log("currentUserId", currentUserId)
    const userId = data.members.find((id) => id!==currentUserId)

    // const UserId = data.member

    useEffect(() => {
        const getUserData = async () => {
            
        }
    })


  return (
    <div className='recent-down'>



              {/* {user.map((list) => (
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
        ))}  */}
                            
    </div>
  )
}

export default Conversation