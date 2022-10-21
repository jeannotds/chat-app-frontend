
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Chat from './pages/Chat';
import userContext from './pages/userContext';


function App() {

  const [user, setUser] = useState([])
  console.log("Mon user ", user)

  return (
   
       <BrowserRouter>
        <Routes className="routes">
        {/* <userContext.Provider user={user} setUser = {setUser}> */}
            <Route path='/' element={<Login  user={user} setUser={setUser}/>}/>
            <Route path='/chat' element={<Chat /> }/>
            {/* </userContext.Provider> */}
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;