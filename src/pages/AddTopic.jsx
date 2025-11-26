import React from 'react'
import { useState } from 'react'
import { addTopic } from '../myBackend'

export const AddTopic = () => {
    const [newTopic,setNewTopic] = useState("")

    
    const handleAdd = async ()=> {
        await addTopic(newTopic)
    }
  return (
    <div>
        <input type="text" value={newTopic} onChange={(e)=>setNewTopic(e.target.value)}/>
        <button onClick={handleAdd}>Add topic</button>

    </div>
    
  )
}
