import React, { useEffect, useRef, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";
import Conversation from "../components/Conversation";
import OnlineUser from "../components/OnlineUser";
import FormInput from "../components/FormInput";

import InputEmoji from "react-input-emoji";
import "../styles/emojiinput.css";

import { io } from 'socket.io-client';

const Chat = ({user}) => {

  const [userChats, setUserChats] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arriveMessage, setArriveMessage] = useState(null);
  const [mewMessage, setNewMessage] = useState(null);
  const scrolRef = useRef(null);
  const [loadMessage, setLoadMessage] = useState(false);




  const [text, setText] = useState("");

  const socket = useRef();


  useEffect(() => { 
    socket.current = io("http://localhost:8800");

    socket.current.on("getMessage", data => {
      setArriveMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
  }, []);

  
  useEffect(() => {
    socket.current.emit('addUser', currentUser._id);
    socket.current.on("getUsers", users=> users);
  }, [currentUser]);

  useEffect(() => {
    arriveMessage && chat.members.includes(arriveMessage.senderId) && 
    setMessages((prev => [...prev, arriveMessage]));
  }, [arriveMessage, chat,]);


  // scroll auto message
  useEffect(() => {
    scrolRef.current?.scrollIntoView( {behavior: "smooth"} );
  }, [messages]);

  
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
      setTimeout(() => {
        setLoadMessage(true);
      },4000);
    })
    .catch((err) => {
      throw err;
    }); 
  }, [chat, mewMessage]);

  


  
  const receiverUser = chat?.members.find(id => id !== currentUser._id);
  async function sendMessage() {
    
    const message = { chatId : chat._id , senderId : currentUser._id, text: text };

    //Send message
    socket.current.emit("sendMessage", {
      senderId : currentUser._id,
      receiverId: receiverUser,
      text: text,
    });
    
    try {
      const res = await axios({
        method: "POST",
        headers: {'X-Custom-Header': 'foobar'},
        url: 'http://localhost:8001/api/message',
        data: message,
      });
      setMessages([...messages, res.data.result]);
    }
    catch(err) {
      throw err;
    }
      
  };
  


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
                          <div ref={scrolRef}>
                              <Message message = {msg} loadMessage={loadMessage} currentUser={currentUser} own={msg.senderId === currentUser._id } />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ) : <div style={{
                  textAlign: 'center',
                }}>No message exist</div>
              }
               <div>
                    <div className="inputEmoji" >
                        <InputEmoji 
                            value={text}
                            onChange={setText}
                            cleanOnEnter
                            onEnter={sendMessage}
                            placeholder="Ecrire un message..."
                        />
                        <div className="button-msg" onSubmit={sendMessage} type="submit" >Send</div> 
                    </div>
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