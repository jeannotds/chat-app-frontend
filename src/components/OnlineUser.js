import React from 'react'
import Profil from '../images/Jeannot.jpeg';


export default function OnlineUser({currentUser}) {
  return (
    <>
        <div className="my-image">
            <img
                src={Profil}
                alt="profil"
                title="profil"
                className="my_profil_msg"
            />
            <div className="Online">
                <div className="online-name">{currentUser?.username}</div>
                <div className="if-online">Online</div>
            </div>
        </div>
        <hr className="list-hr"></hr>
    </>
  );
}