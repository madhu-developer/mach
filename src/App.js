import React from 'react'
import './App.css';
// import { Home } from './Home'
import {Routes, Route} from 'react-router-dom'
import { Clients } from './Clients'
import { Projects } from './Projects'
import { Navbar } from './Navbar'
import { Sidenav } from './Sidenav'
import { Body } from './Body'

const App = () => {
  return (
    <div className='components'>
    <Navbar/>
    <Sidenav/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default App