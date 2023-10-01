import React, { useEffect, useState } from "react";
import profil from "../images/Jeannot.jpeg";
import Message from "../components/Message";
import axios from "axios";

const Chat = () => {


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
             
                <div className="friend">
                  <div className="my-friend">
                    <img
                      src={profil}
                      alt="profil"
                      title="profil"
                      className="profil-recent"
                    />
                    <div className="name-friend">
                      <span className="name">Users name</span>
                      <div className="alert-msg">Last message</div>
                    </div>
                  </div>
                  <div className="container-hr">
                    <div className="hr"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-message">

            <div className="message">
              <div className="my-image">
                <img
                  src={profil}
                  alt="profil"
                  title="profil"
                  className="my_profil_msg"
                />
                <div className="Online">
                  <div className="online-name">user name</div>
                  <div className="if-online">Online</div>
                </div>
              </div>
              <hr className="list-hr"></hr>

              <div className="list-message">
                {/* <Message own={true} /> */}
              
                  <div >
                    <Message />
                  </div>
              </div>
              <form className="form">
                <hr></hr>
                <input type="text" placeholder="" />
                <button>send</button>
              </form>
            </div>

      </div>
    </div>
  );
};

export default Chat;