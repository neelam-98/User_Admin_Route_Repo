import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Home from './Home';
import Admin from './Admin';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
