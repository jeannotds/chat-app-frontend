import React from 'react'
import '../styles/messahe.css'


const Message = ({own}) => {
    return(
      <div className={own ? "message-1 own" : "message-1"}>
          <div className='messageTop'>
              {/* <img src=''  alt='profil' title=''/> */}
              <p className='messageText'>Hello</p>
          </div>
          <div className='messageBottom'>
              1 hour ego
          </div>
      </div>
    )
}

export default Message