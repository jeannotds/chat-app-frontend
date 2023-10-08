import React, { useEffect, useRef, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";
import Conversation from "../components/Conversation";
import OnlineUser from "../components/OnlineUser";
import FormInput from "../components/FormInput";
import { io } from 'socket.io-client';

const Chat = ({user}) => {

  const [userChats, setUserChats] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  // const [socket, setSocket] = useState(null);
  const socket = useRef(io("http://localhost:8800"));
  


  // Initial Socket
  useEffect(() => {
    console.log('socket => ', socket);
    socket.current.emit('addUser', currentUser._id);
    socket.current.on("getUser", users=> {
      console.log('users socket : ', users);
    });
  },[currentUser]);



  // useEffect(() => {
  //   socket?.on("welcome", message => {
  //     console.log(message);
  //   });
  // },[socket]);
  
  useEffect(() => {
      
    axios.get(`http://localhost:8001/api/chat/${currentUser._id}`)
    .then((res) => {
      setUserChats(res.data);
    })
    .catch((err) => {
      throw err;
    });

  }, [currentUser._id]);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/message/${chat?._id}`)
    .then((res) => {
      setMessages(res.data.messages);
    })
    .catch((err) => {
      throw err;
    }); 
  }, [chat,]);
  


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
                      <div key={chat._id} className="friend" onClick={
                        () => {
                          setChat(chat);
                        }
                      }>
                          <Conversation   data={chat} currentUser={currentUser._id}/>
                      </div>
                    ))
                  }
              </div>
          </div>
        </div>
      </div>
      <div className="container-message">
          {
            chat ? (
              <div className="message">
              <OnlineUser currentUser={currentUser} chat={chat} />
              {
                (messages.length > 0) ? (
                  <div className="list-message">
                    {
                      messages?.map((msg) => (
                        <div key={msg?._id}>
                          <Message message = {msg} currentUser={currentUser} own={msg.senderId === currentUser._id } />
                        </div>
                      ))
                    }
                  </div>
                ) : <div style={{
                  textAlign: 'center',
                }}>No message exist</div>
              }
               <div>
                  <FormInput chatId= {chat._id} senderId= {currentUser._id} />
               </div>
            </div>
            ): 
            <div>
              <div className="show-conversation" >No conversation.</div>
              <div>Click to open your converstion.</div>
            </div>
          }

      </div>
    </div>
  );
};

export default Chat;