import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Layouts from './component/Layouts'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
import Login from './pages/Register/Login'
import Forgetpassword from './pages/Register/Forgetpassword'
import Reset from './pages/Register/Reset'

function App() {


  return (
    <>
      <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/forget' element={<Forgetpassword />}/>
      <Route path='/reset' element={<Reset />}/>

        <Route path='/' element={<Layouts />}>
          <Route index element={<Dashboard />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
