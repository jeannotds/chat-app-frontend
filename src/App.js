
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Users from './components/Users';


function App() {


  
  return (
   
       <BrowserRouter>
        <Routes className="routes">
            <Route path='/' element={<Login />}/>
            <Route path='/chat' element={<Chat /> }/>
            <Route path='/users' element={<Users /> }/>
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;