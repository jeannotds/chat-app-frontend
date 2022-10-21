
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Chat from './pages/Chat';
import userContext from './pages/userContext';
import axios from 'axios';


function App() {

  const [user, setUser] = useState({})
  
  
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