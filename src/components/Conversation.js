import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profil from '../images/Jeannot.jpeg'
import axios from 'axios'




function Conversation({chat}) {


  return (
    <div className='recent-down'>
        
              {/* {user.map((list) => ( */}
                            <div className='friend'>
                                <div className='my-friend' >
                                    <img src={profil} alt="profil" title="profil" className='profil-recent' />
                                    <div className='name-friend'>
                                        <span className='name'>
                                            {/* {list.name} */}
                                        </span>
                                        <div className='alert-msg'>Last message</div>
                                    </div>
                            </div>
                            <div className='container-hr'>
                                <div className='hr'></div>
                            </div>
              </div>
        {/* ))} */}
                            
    </div>
  )
}

export default Conversation