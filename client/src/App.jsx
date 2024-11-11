import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Auth type='login'/>} />
        <Route path='/register' element={<Auth type='register'/>} />
        {/* <Route path='/register' element={<Login/>} />
        <Route path='/home' element={<Login/>} /> */}

      </Routes>
    </>
  )
}

export default App;
