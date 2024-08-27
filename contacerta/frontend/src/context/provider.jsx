import React, { createContext, useState, useEffect } from 'react'
import ErrorPopup from '../components/ErrorPopup/ErrorPopup'
import { loginUser } from '../services/LoginUserService'
import { useNavigate } from 'react-router-dom'

export const Context = createContext({})

export const AuthProvider = ({children}) => {   

  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [hideDatas, setHideDatas] = useState(true)
  const navigate = useNavigate()

  const login = async (email, password) => {
    const response = await loginUser(email, password)

    if(response?.status === 200) {
      localStorage.setItem("token", response?.data?.token)
      localStorage.setItem("user", JSON.stringify(response?.data))
      setUser(response?.data)
      navigate("/dashboard")
    } else {
      setError(response?.response?.data?.error)
    }
  }

  useEffect(() => {
    if(error) {
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }, [error])

  return (
    <Context.Provider 
      value={{
        error, 
        setError,
        login,
        user,
        hideDatas, 
        setHideDatas
      }}
    >
      { error && <ErrorPopup /> }
      {children}
    </Context.Provider>
  )
}

export default AuthProvider