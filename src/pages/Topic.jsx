import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { readTopicById } from '../myBackend'

export const Topic = () => {
    const [question,setQuestion] = useState("")
    const [topicName,setTopicName] = useState("")
    const { id } = useParams()
    console.log(id);
    
    const navigate = useNavigate()
    
    useEffect(()=>{
        readTopicById(id,setTopicName)
    },[])
    console.log(topicName);
    
    const handleAdd = () => {

    }

  return (
    <div>
        <h1>{topicName}</h1>
        <button onClick={()=>navigate("/addcard/"+ id)}>Addcard</button>
    </div>
  )
}
