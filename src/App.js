import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}
