
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Users from './components/Users';


function App() {

  const currentUser = JSON.parse(localStorage.getItem('data')).user;

  
  return (
   
       <BrowserRouter>
        <Routes className="routes">
            <Route path='/' element={<Login />}/>
            <Route path='/chat' element={<Chat user={currentUser} /> }/>
            <Route path='/users' element={<Users /> }/>
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;