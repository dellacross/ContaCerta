import React, { createContext, useState, useEffect } from 'react'
import ErrorPopup from '../components/ErrorPopup/ErrorPopup'
import { loginUser } from '../services/LoginUserService'
import { useNavigate } from 'react-router-dom'
import { GetMenuItemsService } from '../services/GetMenuItemsService'

export const Context = createContext({})

export const AuthProvider = ({children}) => {   

  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [hideDatas, setHideDatas] = useState(true)
  const [menuItems, setMenuItems] = useState(null)
  const navigate = useNavigate()

  const login = async (email, password) => {
    /*
    const response = await loginUser(email, password)

    if(response?.status === 200) {
      localStorage.setItem("token", response?.data?.token)
      localStorage.setItem("user", JSON.stringify(response?.data))
      setUser(response?.data)
      const menuItems = await GetMenuItemsService()
      setMenuItems(menuItems?.data)
      navigate("/dashboard")
    } else {
      setError(response?.response?.data?.error)
    }
    */
    navigate("/dashboard")
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
        setHideDatas,
        menuItems
      }}
    >
      { error && <ErrorPopup /> }
      {children}
    </Context.Provider>
  )
}

export default AuthProvider