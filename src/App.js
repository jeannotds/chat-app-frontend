
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { useEffect, useState } from 'react';


function App() {
  
  // const currentUser = JSON.parse(localStorage.getItem('data')).user;

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if((localStorage.getItem('data')) !== null){
      const user = JSON.parse(localStorage.getItem('data')).user;
      setCurrentUser(user);
    }
  },[]);
  
  return (
   
       <BrowserRouter>
        <Routes className="routes">
            <Route path='/' element={<Login />}/>
            {
              currentUser ? 
                <Route path='/chat' element={<Chat user={currentUser} /> }/> :
                <Route path='/' element={<Login />}/>
            }
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;