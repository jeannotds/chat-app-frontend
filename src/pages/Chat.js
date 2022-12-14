import React, { useEffect, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";

const Chat = () => {
  const [userChat, setUserChat] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [chats, setChats] = useState([]);
  const [users, setUsers] = useState([]);
  const [UserReceiveMessage, setUserReceiveMessage] = useState({});
  const [userSenderMessage, setUserSenderMessage] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [bothUserChat, setBothUsrChat] = useState({});

  const showUser = (listUsers) => {
    setUserChat(listUsers);
    // setCurrentChat(listUsers);
    setCurrentChat(bothUserChat);
  };

  //USER COONECT TO PAGE
  const user = JSON.parse(localStorage.getItem("user"));

  //ALL USERS
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

  //MY CONVERSATION
  useEffect(() => {
    const getUSerConversation = async () => {
      try {
        const allChat = await axios.get(
          `http://localhost:3005/chat/${user._id}`
        );
        setChats(allChat); //Conversation
        console.log("chats", chats);
      } catch (error) {
        console.log(error);
      }
    };
    getUSerConversation();
  }, [user._id]);

  

  // BOTH CONVERSATION
  useEffect(() => {
    const getBothConversation = async () => {
      try {
        const bothChat = await axios.get(
          `http://localhost:3005/chat/find/${userChat._id}/${user._id}`
        );
        setBothUsrChat(bothChat);
      } catch (error) {
        console.log(error);
      }
    };
    getBothConversation();
  }, [userChat._id, user._id]);


  //MESSAGE RECEIVER
  useEffect(() => {
    const getUserMessage = async () => {
      try {
        const message = await axios.get(
          `http://localhost:3005/message/${userChat._id}`
        );
        setUserReceiveMessage(message);
        console.log("RECEIVE : ", UserReceiveMessage);
      } catch (err) {
        console.log(err);
      }
    };
    getUserMessage();
  }, [userChat._id]);

  //MESSAGE SENDER
  useEffect(() => {
    const getUserSenderMessage = async () => {
      try {
        const message = await axios.get(
          `http://localhost:3005/message/${user._id}`
        );
        setUserSenderMessage(message);
      } catch (err) {
        console.log(err);
      }
    };
    // if(userSenderMessage != null)
    getUserSenderMessage();
  }, [user._id, userSenderMessage]);

  //CONVERSATION DEUX USERS

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
                  <div className="online-name">{userChat.name}</div>
                  <div className="if-online">Online</div>
                </div>
              </div>
              <hr className="list-hr"></hr>

              <div className="list-message">
                {/* <Message own={true} /> */}

                {UserReceiveMessage.data.map((msg) => (
                  <div key={msg._id}>
                    <Message msg={msg} />
                  </div>
                ))}
              </div>
              <form className="form">
                <hr></hr>
                <input type="text" placeholder="" />
                <button>send</button>
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

// const [ user, setuser ] = useState([])

// useEffect(() => {
//     const getUsers = async()=>{
//         try {
//             const response=await axios.get("http://localhost:3005/api/auth/")
//             setuser(response.data)
//         } catch (error) {
//         console.log(error)
//         }
//     }
//     getUsers()
// }, [])

// console.log("USER : ", user)

//     const [ chat, setChat ] = useState([])

//     useEffect(() => {
//         const getUsers = async()=>{
//             try {
//                 const response=await axios.get(`http://localhost:3005/api/chat/${user._id}`)
//                 // console.log(response.data)
//                 setChat(response.data)
//             } catch (error) {
//             console.log(error)
//             }
//         }
//         getUsers()
// }, [])

// const getChats = async() => {

//     try{
//         // const { data } = await userChats(user._id)
//         const { data } = await userChats()
//         setChats(data)
//     }
//     catch(error) {
//         console.log(error)
//     }

// }
// getChats()
