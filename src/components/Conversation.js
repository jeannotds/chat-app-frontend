import React, { useEffect, useState } from "react";
import Profil from "../images/Jeannot.jpeg";
import { getUser } from "../helper/request/user";

export default function Conversation({ data, currentUser }) {

    const [userData, setUserData] = useState(null);
    const [loadUser, setLoadUser] = useState(false);

    useEffect(() => {
        const userId = data.members.find(id => id !== currentUser);
        const fetchData = async() => {
            try{
              const user = await getUser(userId);
              setUserData(user);
              setTimeout(() => {
                setLoadUser(true);
              },1000);
            }  
            catch(err){
              throw err;
            }        
        };
        fetchData();
    },[currentUser, data]);

  return (
    <>
      <div className="my-friend">
        {loadUser ? <img
          src={Profil}
          alt="profil"
          title="profil"
          className="profil-recent"
        /> : <div className="LoadImage"></div>}
        <div className="name-friend">
          {  
            loadUser ? 
              <>
                <span className="name">{userData?.username}</span> 
                <div className="alert-msg">Hello</div>
              </> : <div className="loadUser"></div> 
          }
        </div>
      </div>
      <div className="container-hr">
        <div className="hr"></div>
      </div>
    </>
  );
}