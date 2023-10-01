
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';


function App() {


  
  return (
   
       <BrowserRouter>
        <Routes className="routes">
            <Route path='/' element={<Login />}/>
            <Route path='/chat' element={<Chat /> }/>
        </Routes>
    </BrowserRouter>
    
   

  );
}

export default App;