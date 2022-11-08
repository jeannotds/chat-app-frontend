
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Signup from './pages/Signup';


function App() {

  const [user, setUser] = useState({});

  
  return (
   
       <BrowserRouter>
        <Routes className="routes">
            <Route path='/' element={<Login  user={user} setUser={setUser}/>}/>
            <Route path='/chat' element={<Chat user={user} /> }/>
            <Route path='/signup' element={<Signup user={user} /> }/>
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;