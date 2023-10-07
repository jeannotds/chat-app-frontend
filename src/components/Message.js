import React from "react";
import "../styles/messahe.css";
import { format } from 'timeago.js';

const Message = ({ own, message, currentUser }) => {

  return (
    <div className={own ? "message-1" : "message-1 own"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        { message.text ? 
          <div>
            <p className="messageText">{message?.text}</p>
            <div className="messageBottom">{format(message.createdAt)}</div>
          </div> : ''
        }
      
      </div>
    </div>
  );
};

export default Message;
