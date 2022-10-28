import React, { useEffect, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";

const Chat = () => {
  const [listeUser, setListeUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [chats, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const showUser = (listUsers) => {
    setListeUser(listUsers);
    setCurrentChat(listUsers);
  };
  // console.log("ID USER COLABORATEUR :  ", listeUser._id); // ID USER CONVERSATION

  console.log("chats => ", chats);

  //Id User
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("list user", listeUser);

  //User
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
      .catch((err) => console.log(err));
  }, [listeUser._id, user._id]);

  console.log(messages)

  // console.log("ID SENDER : ", user._id);
  // console.log("ID RECEIVE : ", listeUser._id);

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
                
                  {
                    messages.map((message) => (
                      <div key={message._id}>
                          <Message message={message} own={message.senderId === user._id} />
                      </div>
                    ))
                  }

                {/* <Message own={true} /> */}

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
