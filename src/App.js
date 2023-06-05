import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, BrowserRouter, Routes, } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<News pageSize={10} category='general' country='in' />} />
          <Route path='/entertainment' element={<News pageSize={10} category='entertainment' country='in' />} />
          <Route path='/business' element={<News pageSize={10} category='business' country='in' />} />
          <Route path='/health' element={<News pageSize={10} category='health' country='in' />} />
          <Route path='/science' element={<News pageSize={10} category='science' country='in' />} />
          <Route path='/sports' element={<News pageSize={10} category='sports' country='in' />} />
          <Route path='/technology' element={<News pageSize={10} category='technology' country='in' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
