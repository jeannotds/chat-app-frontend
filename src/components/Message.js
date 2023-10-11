import React from "react";
import "../styles/messahe.css";
import { format } from 'timeago.js';

const Message = ({ own, message, currentUser, loadMessage }) => {

  console.log(loadMessage);

  return (
    <div className={own ? "message-1" : "message-1 own"}>
      {loadMessage ?  <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        { message.text ? 
          <div>
            <p className="messageText">{message?.text}</p>
            <div className="messageBottom">{format(message.createdAt)}</div>
          </div> : <div className="loardMessage"></div>
        }
      
      </div> : "Loading"}
     
    </div>
  );
};

export default Message;
