import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { readTopicsOnce } from '../myBackend'

export const Topics = () => {
        const [topics,setTopics] = useState([])

        const navigate = useNavigate()

        console.log(topics);
        
        useEffect(()=>{
          readTopicsOnce(setTopics)
        },[])

  return (
    <div className="topics">
        <h1>Topics</h1>
        {topics&& topics.map(obj=><button onClick={()=>navigate("/topic/" + obj.id)} key={obj.id}>{obj.name}</button>)}
        <button onClick={()=>navigate("/addtopic")}>Add new topic</button>
    </div>
  )
}