/* eslint-disable react/prop-types */
import React from "react";
import "../styles/messahe.css";
// import { format } from "timeago.js";

// eslint-disable-next-line react/prop-types
const Message = ({ own, msg }) => {
  return (
    <div className={own ? "message-1 own" : "message-1"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        <p className="messageText">{msg.text}</p>
      </div>
      <div className="messageBottom"></div>
    </div>
  );
};

export default Message;
