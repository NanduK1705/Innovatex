import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import HackathonList from '../HackathonList/HackathonList';
import HacksForYou from '../HacksForYou/HacksForYou'
import HackathonDetails from '../HackathonDetails/HackathomDetails';
import OrganizeHack from '../OrganizeHack/OrganizeHack';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/hacklist' element={<HackathonList/>}/>
        <Route path='/hoi' element={<HacksForYou/>}/>
        <Route path='/hi' element={<HackathonDetails/>}/>
        <Route path='/helo' element={<OrganizeHack/>}/>
        </Routes>
    </Router>
  )
}

export default App