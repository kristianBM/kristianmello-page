import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';


function App() {

  const [stickyHeader, setStickyHeader] = useState(false);

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
