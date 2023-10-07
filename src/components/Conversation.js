import React, { useEffect, useState } from "react";
import Profil from "../images/Jeannot.jpeg";
import axios from "axios";

export default function Conversation({ data, currentUser }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = data.members.find(id => id !== currentUser);
        axios.get(`http://localhost:8001/api/user/${userId}`)
        .then((res) => {
            setUserData(res.data);
        }).catch((err) => {
            throw err;
        });
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