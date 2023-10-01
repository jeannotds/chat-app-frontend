import React from "react";
import "../styles/messahe.css";

const Message = ({ own, message, currentUser }) => {

  console.log(' currentUser : ', currentUser);

  return (
    <div className={own ? "message-1 own" : "message-1"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom"></div>
    </div>
  );
};

export default Message;
