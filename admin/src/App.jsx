import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Layouts from './component/Layouts'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Dashboard />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
