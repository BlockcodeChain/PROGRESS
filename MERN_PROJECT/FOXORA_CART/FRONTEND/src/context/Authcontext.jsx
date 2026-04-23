import React from 'react'
import { createContext } from 'react'
export const authDataContext=createContext()
const Authcontext = ({children}) => {
    let serverURL="http://localhost:3000"
    let value={serverURL}
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
      </authDataContext.Provider >
    </div>
  )
}

export default Authcontext
