import React, { useEffect, useState } from "react";
import Profil from "../images/Jeannot.jpeg";
import { getUser } from "../helper/request/user";

export default function Conversation({ data, currentUser }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = data.members.find(id => id !== currentUser);
        const fetchData = async() => {
            try{
              const user = await getUser(userId);
              setUserData(user);
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
        <img
          src={Profil}
          alt="profil"
          title="profil"
          className="profil-recent"
        />
        <div className="name-friend">
          <span className="name">{userData?.username}</span>
          <div className="alert-msg">Hello</div>
        </div>
      </div>
      <div className="container-hr">
        <div className="hr"></div>
      </div>
    </>
  );
}