import React from "react";
import "../styles/messahe.css";

const Message = ({ own, message, currentUser }) => {

  console.log('message => ', message);

  return (
    <div className={own ? "message-1" : "message-1 own"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        { message.text ? 
          <p className="messageText">{message?.text}</p> : ''
        }
      </div>
      <div className="messageBottom"></div>
    </div>
  );
};

export default Message;
