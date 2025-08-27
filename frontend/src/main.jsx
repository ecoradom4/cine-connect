import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './styles.css'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('cine_token')
  return token ? children : <Navigate to="/" replace />
}

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route 
          path='/dashboard' 
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
