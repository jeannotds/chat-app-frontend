import React, { useEffect, useState } from 'react';
import Profil from '../images/Jeannot.jpeg';
import { getUser } from '../helper/request/user';


export default function OnlineUser({currentUser, chat}) {

  const [receiver, setReceiver] = useState(null); 
  const receiverUser = chat.members.find(id => id !== currentUser._id);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const user = await getUser(receiverUser);
        setReceiver(user);
      }
      catch (err) {
        throw err;
      }
    };
    fetchData();
  },[currentUser, receiverUser]);


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
                <div className="online-name">{receiver?.username}</div>
                <div className="if-online">Online</div>
            </div>
        </div>
        <hr className="list-hr"></hr>
    </>
  );
}