import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AccessContext } from '../context/MyAccessProvider'

export const Home = () => {
    const {hasAccess} = useContext(AccessContext)
    
    const navigate = useNavigate()

    return (
        <div className='homeContainer fadeIn'>
            <div className="home">
            <h1>Home</h1>

            <button onClick={() => navigate("/topics")}>Topicok</button>

            {hasAccess && (
                <button onClick={() => navigate("/addcard")} className="primary">
                    Új kártya hozzáadása
                </button>
            )}
            </div>
        </div>
    )
}
