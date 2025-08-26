import React, { useEffect, useState } from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export default function Dashboard(){
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const token = localStorage.getItem('cine_token')
    if (!token) return
    axios.get(`${API}/auth/me`, { headers: { Authorization: 'Bearer ' + token } })
      .then(r=>setUser(r.data.user))
      .catch(()=>{})
  },[])
  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      {user ? <div>Welcome, {user.name || user.email}</div> : <div>Not logged in</div>}
    </div>
  )
}