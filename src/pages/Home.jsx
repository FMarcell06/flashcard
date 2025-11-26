import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {
    const navigate = useNavigate()
    const [token,setToken] = useState(true)
  return (
    <div className="home">
        <h1>Home</h1>
        <button onClick={()=>navigate("/topics")}>topic</button>
        {token&& <button onClick={()=>navigate("/addcard")}>Új kártya hozzáadása</button>}
    </div>
  )
}
