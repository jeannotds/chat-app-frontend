import React, { useEffect, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";
import Conversation from "../components/Conversation";
import OnlineUser from "../components/OnlineUser";

const Chat = ({user}) => {

  const [userChats, setUserChats] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [text, setText] = useState("");

  console.log('msg : ', text);
  
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
      console.log('message received : ', res.data);
      setMessages(res.data.messages);
    })
    .catch((err) => {
      throw err;
    }); 
  }, [chat,]);

  
  
  async function sendMessage(e) {
    e.preventDefault();

      await axios({
        method: "POST",
        headers: {'X-Custom-Header': 'foobar'},
        url: 'http://localhost:8001/api/message',
        data: { chatId : chat._id , senderId : currentUser._id, text: text },
      })
      .then((res) => {
        const message = res.data;
        console.log("message: ", message);
      })
      .catch((err) => {
        throw err;
      });
      
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
                          console.log(chat);
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
              <OnlineUser currentUser={currentUser} />
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
                }}>No message exits</div>
              }
              <form className="form" onSubmit={sendMessage}>
                <hr></hr>
                <input type="text" placeholder="Ecrire un message..." onChange={(msg) => {
                  setText(msg.target.value);
                }} />
              </form>
            </div>
            ): 
            <>
              <div className="show-conversation" >No conversation.</div>
              <div>Click to open your converstion.</div>
            </>
          }

      </div>
    </div>
  );
};

export default Chat;