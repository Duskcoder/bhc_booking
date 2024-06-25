import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Layouts from './component/Layouts'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
import Login from './pages/Register/Login'
import Forgetpassword from './pages/Register/Forgetpassword'
import Reset from './pages/Register/Reset'
import User from './pages/Dashboard/User'
import Maintenance from './pages/Dashboard/Maintenance'
import Properties from './pages/Dashboard/Properties'
import Addproperties from './pages/Dashboard/Addproperties'
import History from './pages/Dashboard/History'
import { PrivateRoutes } from './protect/Privacyroute'
import { OpenRoutes } from './protect/Openroute'
import Setting from './pages/Dashboard/Setting'
import Verfications from './pages/Dashboard/Verfications'
import Bookings from './pages/Dashboard/Bookings'
import Reports from './pages/Dashboard/Reports'

function App() {


  return (
    <>

      <Routes>

        <Route path='/login' element={<OpenRoutes><Login /></OpenRoutes>} />
        <Route path='/forget' element={<Forgetpassword />} />
        <Route path='/reset' element={<Reset />} />

        <Route path='/' element={<PrivateRoutes><Layouts /></PrivateRoutes>}>
          <Route index element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Properties />} />

          <Route path="/addproperties" element={<Addproperties />} />
          <Route path="/verification" element={<Verfications />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/history" element={<History />} />
          <Route path="/reports" element={<Reports />} />

          <Route path="/setting" element={<Setting />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
