import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {   

  const [gastos, setGastos] = useState([])

  const handleAddGasto = (item) => {
    let arr = [...gastos, item]
    setGastos(arr)
  }

  return (
    <AuthContext.Provider value={{gastos, handleAddGasto}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider