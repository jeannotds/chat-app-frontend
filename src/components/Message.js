/* eslint-disable react/prop-types */
import React from "react";

import "../styles/messahe.css";

// eslint-disable-next-line react/prop-types
const Message = ({ own, message }) => {
  return (
    <div className={own ? "message-1 own" : "message-1"}>
      <div className="messageTop">
        {/* <img src=''  alt='profil' title=''/> */}
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{message.createdAt.split("T")[0]} <span>{message.createdAt.split("T")[1].split(".")[0]}</span></div>
      <div></div>
    </div>
  );
};

export default Message;
