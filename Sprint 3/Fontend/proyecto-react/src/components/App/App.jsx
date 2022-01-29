import '../CSS/style.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Help from '../Help/Help'
import Navbar from '../Navbar/Navbar';
import UserData from '../UserData/UserData';
import Posts from '../Posts/Posts';
import Profile from '../Profile/Profile';
import AwaitingRequests from '../AwaitingRequests/AwaitingRequests';
import NewCourse from '../NewCourse/NewCourse';
import Friends from '../Friends/Friends';

 
function App() {

  return(
    <div>
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/help' element={<><Navbar/><Help/></>} />
        <Route exact path='/datosUsuario' element={<><Navbar /><UserData/></>} />
        <Route exact path='/posts' element={<><Navbar/><Posts/></>} />
        <Route exact path='/perfil' element={<><Navbar/><Profile/></>} />
        <Route exact path='/agregarAmigo' element={<><Navbar/><AwaitingRequests/></>} />
        <Route exact path='/nuevoCurso' element={<><Navbar/><NewCourse/></>} />
        <Route exact path='/amigos' element={<><Navbar/><Friends/></>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;




