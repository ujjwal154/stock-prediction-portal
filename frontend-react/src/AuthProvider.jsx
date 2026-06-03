import React from 'react'
import {useState, useContext} from 'react'


//create context
const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const[isLogin, setIsLogin] = useState(
        !!localStorage.getItem('access_token')
    )
  return (
    <>
      <AuthContext.Provider value={{isLogin, setIsLogin}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
export {AuthContext};