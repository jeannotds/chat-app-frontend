import React from "react"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profil from '../images/Jeannot.jpeg'
import axios from 'axios'
import Conversation from "../components/Conversation"



const Chat = () => {


    return(
       <div className="chat">
            <div className="sidebar">
                    <div className="content-sidebar">
                        <div className="small-sidebar">
                            <img src={profil} alt="profil" title="profil" className='my_profil' />
                        </div>
                        <div className="recent">
                            <input type="text" placeholder="Search"  className='search'/>
                            <Conversation />
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
                    <div className="blog-msg-left">
                            <div className="left">
                                <span className="my-msge-sended" >Salut!</span>
                                <div className="date">Date</div>
                            </div>
                    </div>
                        <div className="blog-msg-right">
                            <div className="right">
                                <span className="my-msge-sended ">comment tu vas ?</span>
                                <div className="date">Date</div>
                            </div>
                        </div>                 
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