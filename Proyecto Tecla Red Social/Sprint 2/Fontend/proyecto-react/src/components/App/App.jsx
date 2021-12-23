import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Help from '../Help/Help'
import Navbar from '../Navbar/Navbar';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/help' element={<Help/>} />
        <Route exact path='/navbar' element={<Navbar/>}/>
      </Routes>
    </Router>
  )
}

export default App;

