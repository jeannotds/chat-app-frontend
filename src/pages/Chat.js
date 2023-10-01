import React, { useEffect, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";
import Conversation from "../components/Conversation";
import OnlineUser from "../components/OnlineUser";

const Chat = ({user}) => {

  // const [currentUser, setCurrentUser] = useState(user);

  const [userChats, setUserChats] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);


  useEffect(() => {
      
    axios.get(`http://localhost:8001/api/chat/${currentUser._id}`)
    .then((res) => {
      setUserChats(res.data);
    })
    .catch((err) => {
      throw err;
    });

  }, [currentUser._id]);

  


  return (
    <div className="chat">
      <div className="sidebar">
        <div className="content-sidebar">
          <div className="small-sidebar">
            <img
              src={profil}
              alt="profil"
              title="profil"
              className="my_profil"
            />
          </div>
          <div className="recent">
            <input type="text" placeholder="Search" className="search" />
            <h4>Recent</h4>
              <div className="recent-down">
                  {
                    userChats?.chat?.map((chat) => (
                      <div key={chat._id} className="friend">
                            <Conversation   data={chat} currentUser={currentUser._id}/>
                      </div>
                    ))
                  }
              </div>
          </div>
        </div>
      </div>
      <div className="container-message">
            <div className="message">
              <OnlineUser currentUser={currentUser} />
              <div className="list-message">
                  <div >
                    <Message />
                  </div>
              </div>
              <form className="form">
                <hr></hr>
                <input type="text" placeholder="" />
                <button>send</button>
              </form>
            </div>

      </div>
    </div>
  );
};

export default Chat;