import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {   

  const [gastos, setGastos] = useState([])
  const navigate = useNavigate()

  const handleAddGasto = (item) => {
    let arr = [...gastos, item]
    setGastos(arr)
  }

  useEffect(() => {
    let user = localStorage.getItem("user")

    if(!user) navigate("/login")
    else navigate("/dashboard")
  }, [navigate])

  return (
    <AuthContext.Provider value={{gastos, handleAddGasto}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider