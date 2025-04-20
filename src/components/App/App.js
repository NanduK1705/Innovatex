import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Nav from '../Nav/Nav';
import HackathonList from '../HackathonList/HackathonList';
import HacksForYou from '../HacksForYou/HacksForYou'
import Footer from '../Footer/Footer';
import Helpdesk from '../HelpDesk/helpdesk';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/hacklist' element={<HackathonList/>}/>
        <Route path='/hoi' element={<HacksForYou/>}/>
        <Route path='/helo' element={<Footer/>}/>
        <Route path='/helpdesk' element={<Helpdesk />} />
        </Routes>
    </Router>
  )
}

export default App