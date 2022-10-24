import React from 'react'
import '../styles/messahe.css'


const Message = ({own, msg}) => {
    return(
      <div className={own ? "message-1 own" : "message-1"}>
          <div className='messageTop'>
              {/* <img src=''  alt='profil' title=''/> */}
              <p className='messageText'>{msg.text}</p>
          </div>
          <div className='messageBottom'>
              {msg.updatedAt}
          </div>
      </div>
    )
}

export default Message