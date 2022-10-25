import React, { useEffect, useState } from "react"
import profil from '../images/Jeannot.jpeg'
import Message from '../components/Message'
import axios from "axios"

const Chat = () => {

    const [ listeUser, setListeUser ] = useState({})
    // eslint-disable-next-line no-unused-vars
    const [ chats , setChat ] = useState([])
    const [ users , setUsers ] = useState([])
    const [ messageReceive, setMessageReceive ] = useState({})
    const [ currentChat, setCurrentChat ] = useState(null)

    const showUser = (listUsers) => {
        setListeUser(listUsers)
        setCurrentChat(listUsers)
        
    }
    console.log("ID USER COLABORATEUR :  ", listeUser._id) // ID USER CONVERSATION

    

    //Id User
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log('USER ID CONNECT : ', user._id)
   
    //User
   useEffect(() => {

        const getChats = async() => {
            try{
                const { data } = await axios.get(`http://localhost:3005/auth/user/${user._id}`)
                // console.log("ALL USER : ", data)
                setUsers(data)
            }
            catch(err) {
                console.log(err)
            }
        }
        getChats()
   }, [user._id])

   

   //Messages
   useEffect(() => {
        const getMessages = async() => {
            try{
                const allMessage = await axios.get(`http://localhost:3005/chat/${user._id}`)
                // console.log("CONVERSATION", allMessage)
                 //ID conversation // CONVERSATION
                setChat(allMessage) //setConversation
            }
            catch(error) {
                console.log(error)
            }
        }
        getMessages()

   }, [user._id])

   //MEssages
   useEffect(() => {
        const getUserMessage = async() => {
            try{
                const message = await axios.get(`http://localhost:3005/message/${listeUser._id}`)
                // setMessageReceive(message)
                setMessageReceive(message)
                // console.log("message of a USER receive", messageReceive)
            }
            catch(err){
                console.log(err)
            }
        }
        getUserMessage()
   }, [listeUser._id])

   console.log("ID listeUser Receive ", messageReceive.data)

   //CONVERSATION DEUX USERS


    return(
       <div className="chat">
            <div className="sidebar">
                    <div className="content-sidebar">
                        <div className="small-sidebar">
                            <img src={profil} alt="profil" title="profil" className='my_profil' />
                        </div>
                        <div className="recent">
                            <input type="text" placeholder="Search"  className='search'/>
                            <h4>Recent</h4>
                            <div className='recent-down'>
                                {users?.user?.map((listUsers) => (
                                    <div className='friend' key={listUsers._id}  onClick={()=>showUser(listUsers)}>
                                        <div className='my-friend' >
                                            <img src={profil} alt="profil" title="profil" className='profil-recent' />
                                                <div className='name-friend'>
                                                    <span className='name'>
                                                        {listUsers.name}
                                                    </span>
                                                <div className='alert-msg'>Last message</div>
                                            </div>
                                        </div>
                                        <div className='container-hr'>
                                            <div className='hr'></div>
                                        </div>
                                    </div>    
                                ))}    
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container-message">
            { currentChat ? 
                (
                    <>
                        <div className="message">
                            <div className="my-image">
                                <img src={profil} alt="profil" title="profil" className='my_profil_msg' />
                                <div className="Online">
                                    <div className="online-name">{listeUser.name}</div>
                                    <div className="if-online">Online</div>
                                </div>
                            </div>
                            <hr className="list-hr"></hr>
                
                            <div className="list-message">
                                    {/* <Message own={true} /> */}
                                    {/* {
                                        messageReceive.map((msg) => (
                                            <Message msg={msg} />
                                        ))
                                    } */}
                                    

                                    {messageReceive.data.map((msg) => (
                                        <div key={msg._id}>
                                            <Message msg={msg} own={msg.sender === listeUser._id}/>
                                        </div>
                                    ))}
                                     
                                            
                                   
                            </div>
                            <form className="form">
                                <hr></hr>
                                <input type="text" placeholder=""/>
                                <button>send</button>
                            </form>
               
                            
                        </div>
                    </>
                ) : (
                  <span className="no-chat">Open a Conversation to start a chat</span>
                )
            }
            </div>
       </div>
    )
}

export default Chat



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