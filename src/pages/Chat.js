import React, { useEffect, useRef, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";
import { io } from "socket.io-client";

const Chat = () => {
  const [listeUser, setListeUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [chats, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);

  //Id User
  const user = JSON.parse(localStorage.getItem("user"));

  const showUser = (listUsers) => {
    setListeUser(listUsers);
    setCurrentChat(listUsers);
  };

  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket.current.emit("new-user-add", users);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log("onlineUsers");
    });
  }, [users]);

  console.log("ID USER COLABORATEUR :  ", listeUser._id); // ID USER CONVERSATION

  //U
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3005/auth/user/${user._id}`
        );
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    getChats();
  }, [user._id]);

  //CONVERSATION
  useEffect(() => {
    axios
      .get(`http://localhost:3005/message/${user._id}/${listeUser._id}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log(err));
  }, [listeUser._id, user._id]);

  console.log(messages);

  //SEND A MESSAGE

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3005/message`, {
      senderId: user._id,
      chatId: listeUser._id,
      text: newMessage,
    });
    setNewMessage("");
    console.log(newMessage);
  };
  console.log("");

  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:3005/message`, {
  //       senderId: user._id,
  //       receiveId: listeUser._id,
  //       messageSend: messageSend,
  //     })
  //     .then((res) => {
  //       setMessageSend(messageSend);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
              {users?.user?.map((listUsers) => (
                <div
                  className="friend"
                  key={listUsers._id}
                  onClick={() => showUser(listUsers)}
                >
                  <div className="my-friend">
                    <img
                      src={profil}
                      alt="profil"
                      title="profil"
                      className="profil-recent"
                    />
                    <div className="name-friend">
                      <span className="name">{listUsers.name}</span>
                      <div className="alert-msg">Last message</div>
                    </div>
                  </div>
                  <div className="container-hr">
                    <div className="hr"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-message">
        {currentChat ? (
          <>
            <div className="message">
              <div className="my-image">
                <img
                  src={profil}
                  alt="profil"
                  title="profil"
                  className="my_profil_msg"
                />
                <div className="Online">
                  <div className="online-name">{listeUser.name}</div>
                  <div className="if-online">Online</div>
                </div>
              </div>
              <hr className="list-hr"></hr>

              <div className="list-message">
                {messages.map((message) => (
                  <div key={message._id}>
                    <Message
                      message={message}
                      own={message.senderId === user._id}
                    />
                  </div>
                ))}
              </div>
              <form className="form">
                <hr></hr>
                <input
                  type="text"
                  placeholder="Ecrire un message..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />
                <button onClick={sendMessage}>send</button>
              </form>
            </div>
          </>
        ) : (
          <span className="no-chat">Open a Conversation to start a chat</span>
        )}
      </div>
    </div>
  );
};

export default Chat;
