import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineSend,
  AiOutlineSearch, 
  AiOutlineCamera
} from "react-icons/ai";
import Users from "../images/users.png";
import Message from "../components/Message";
import axios from "axios";
import { io } from "socket.io-client";
import Close from "../images/deconnect.png";
import Imo from "../images/imo.png";
import Profil from "../images/profil.png";
import { Link } from "react-router-dom";

const Chat = () => {
  const [listeUser, setListeUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [chats, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arriveMessage, setArriveMessage] = useState(null);
  const [recent, setRecent] = useState(false);
  const socket = useRef();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    socket.current = io("ws://localhost:3005");
    socket.current.on("getMessage", (data) => {
      setArriveMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]);

  const showUser = (listUsers) => {
    setListeUser(listUsers);
    setCurrentChat(listUsers);
  };

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

  useEffect(() => {
    axios
      .get(`http://localhost:3005/message/${user._id}/${listeUser._id}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log(err, "erreur erreur"));
  }, [newMessage, user._id, listeUser._id]);

  const sendMessage = (e) => {
    e.preventDefault();

    let myMessage = {
      senderId: user._id,
      chatId: listeUser._id,
      text: newMessage,
    };
    axios.post(`http://localhost:3005/message`, myMessage);
    setNewMessage("");

    socket.current.emit("sendMessage", {
      senderId: user._id,
      chatId: listeUser._id,
      text: newMessage,
    });
  };

  useEffect(() => {
    socket.current.on("getMessage", (data) => {});
  }, []);

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

  //Remove Localstarage
  function removeLocastorage(e) {
    let isExecuted = window.confirm("Are you sure to execute this action?");

    if (isExecuted) {
      alert("Action successfully executed");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } else {
      alert("Action canceled");
      e.preventDefault();
    }
  }

  function showDashboard() {
    setRecent(true);
  }

  return (
    <div className="chat">
      <div className="sidebar">
        <div className="content-sidebar">
          <div className="small-sidebar" onClick={showDashboard}>
            <div className="profil-user">
              <img
                src={user.picture}
                alt="profil"
                title="profil"
                className="my_profil"
              />
            </div>
            <Link className="imo-icon">
              <img src={Imo} alt="profil" title="profil" className="imo-icon" />
            </Link>
            <Link to="/" className="close-icon" onClick={removeLocastorage}>
              <img src={Close} alt="profil" title="profil" className="close" />
            </Link>
          </div>
          {recent ? (
            <div className="recent">
              {/* AiOutlineSearch */}
              <div className="recent-search">
                <AiOutlineSearch className="icon-search" />
                <input type="text" placeholder="Search" className="search" />
              </div>
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
                        src={listUsers.picture || Profil}
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
          ) : (
            <div className="open-list">
              <h2 className="users-list">Open recent users list. </h2>
              <img className="recent-illust" src={Users} alt="" />
            </div>
          )}
        </div>
      </div>
      {
        recent ? <div className="container-message">
        {currentChat ? (
          <>
            <div className="message">
              <div className="my-image">
                <img
                  src={listeUser.picture || Profil}
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
                      own={message.senderId !== user._id}
                    />
                  </div>
                ))}
              </div>
              <form className="form">
                <hr></hr>
                <div className="action-message">
                  <div className="input-bog">
                    <input
                      type="text"
                      placeholder="Ecrire un message..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                      className="input-msg"
                    />
                    <input type="file" className="file-camera" />
                    <AiOutlineCamera className="camera" />
                  </div>
                  <button onClick={sendMessage}>
                    <AiOutlineSend />
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <span className="no-chat">Open a Conversation to start a chat</span>
        )}
      </div> : null
      }
      
    </div>
  );
};

export default Chat;
