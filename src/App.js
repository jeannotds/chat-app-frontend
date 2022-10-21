
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Chat from './pages/Chat';
import userContext from './pages/userContext';
import axios from 'axios';


function App() {

  const [user, setUser] = useState({})
  // console.log("Mon user ", user)
  // const userdata = user?.data?.user?._id;
  // // console.log("user APP", userdata)

  // useEffect(()=>{
  //   const userId = localStorage.getItem("user")

  //   axios.get(`http://localhost:3005/http://localhost:3005/auth/user/${userdata}`)
  //   .then((user)=>{
  //     setUser(user)
  //     console.log("RENDU !!!")
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  //   console.log("user APP", userdata)

  // },[user, userdata])

  return (
   
       <BrowserRouter>
        <Routes className="routes">
        {/* <userContext.Provider user={user} setUser = {setUser}> */}
            <Route path='/' element={<Login  user={user} setUser={setUser}/>}/>
            <Route path='/chat' element={<Chat user={user} /> }/>
            {/* </userContext.Provider> */}
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;