/* eslint-disable react/prop-types */
import React from "react";

import "../styles/messahe.css";

// eslint-disable-next-line react/prop-types
const Message = ({ own, message }) => {
  return (
    <div className={own ? "message-1 own" : "message-1"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        {
          message?.text ? <p className="messageText">{message?.text}</p> : null
        }
        
      </div>
        

      <div className="messageBottom">
        {
          message?.image ? 
          <img src={message.image} alt="" title="" className="post-image" /> : null
        }
       <div>
          {message.createdAt.split("T")[0]}{" "}
            <span>{message.createdAt.split("T")[1].split(".")[0]}</span>
       </div>
      </div>
      <div></div>
    </div>
  );
};

export default Message;
