import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { sha1 } from '../utils'

export const AccessContext = createContext()

const STORED_HASH="3cf5744199a330b241c22f4ec20af08fde21b49f"

export const MyAccessProvider = ({children}) => {
    const [token,setToken] = useState(false)

    const verifyKey = async (key) => {
        const hash = await sha1(key)
        const result = hash===STORED_HASH
        if(result) setToken(true)
        return result
    }
    
    const clearKey = () => {
        setToken(false)
    }

  return (
    <AccessContext.Provider value={{token, verifyKey, clearKey}}>
        {children}
    </AccessContext.Provider>
  )
}

