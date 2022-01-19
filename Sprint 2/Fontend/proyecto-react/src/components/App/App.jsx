import '../CSS/style.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Help from '../Help/Help'
import Navbar from '../Navbar/Navbar';
import DatosUsuario from '../datosUsuario/DatosUsuario';
import Posts from '../Posts/Posts';
import Profile from '../Profile/Profile';
import AddFriend from '../AddFriend/AddFriend';
import NewCourse from '../NewCourse/NewCourse';

 
function App() {

    <div>
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/help' element={<><Navbar/><Help/></>} />
        <Route exact path='/datosUsuario' element={<><Navbar/><DatosUsuario/></>} />
        <Route exact path='/posts' element={<><Navbar/><Posts/></>} />
        <Route exact path='/perfil' element={<><Navbar/><Profile/></>} />
        <Route exact path='/agregarAmigo' element={<><Navbar/><AddFriend/></>} />
        <Route exact path='/nuevoCurso' element={<><Navbar/><NewCourse/></>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;




