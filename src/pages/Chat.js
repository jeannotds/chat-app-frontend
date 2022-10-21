import React, { useEffect, useState } from "react"
import profil from '../images/Jeannot.jpeg'
import Conversation from "../components/Conversation"
import Message from '../components/Message'
import axios from "axios"
import { userChats } from "../api/ChatRequests"

const Chat = ({user}) => {



   const [ chats , setChat ] = useState([])

   useEffect(() => {

    // console.log("USER ID : ", user.data.user._id)
    const userId = localStorage.getItem("user")

        const getConversation = async() => {
            try{
                const response = await  axios.get("http://localhost:3005/chat/"+userId)
                // console.log("My Response", (await response))
                console.log("My Response", response.data)

                
                
            }   
            catch(err) {
                console.log(err)
            }
        }
        getConversation()
   }, [user])





        // const [ user, setuser ] = useState([])

        // useEffect(() => {
        //     const getUsers = async()=>{
        //         try {
        //             // const {data} = await userChats(user._id)
        //             // setuser(response.data)
        //             // console.log(response.data)
        //         } catch (error) {
        //         console.log(error) 
        //         }
        //     }
        //     getUsers()
        // }, [])

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
                           
                                <Conversation/>
                              
                            
                        </div>
                    </div>
                </div>
            <div className="container-message">
                <div className="message">
                    <div className="my-image">
                        <img src={profil} alt="profil" title="profil" className='my_profil_msg' />
                        <div className="Online">
                            <div className="online-name">Jeannot</div>
                            <div className="if-online">Online</div>
                        </div>
                    </div>
                    <hr className="list-hr"></hr>
                    <div className="list-message">
                        <Message />
                        <Message own={true} />
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message />
                    </div>
                    
                    <form className="form">
                        <hr></hr>
                        <input type="text" placeholder=""/>
                        <button>send</button>
                    </form>
                </div>
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