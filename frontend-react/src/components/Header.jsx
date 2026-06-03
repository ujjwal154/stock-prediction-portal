import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setIsLogin(false);
    console.log('Logout successful');
    navigate('/login');
  }

  return (

    <>
      <nav className='navbar container align-items-start'>

        <Link className=' navbar-brand text-light' to='/'>
          Stock Prediction Portal
        </Link>
      
        <div className='btn-header'>
          {isLogin ? (
            <button className='btn btn-outline-info login-btn' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link className='btn btn-outline-info login-btn' to="/login">
                Login
              </Link>
              &nbsp;
              <Link className='btn btn-info register-btn' to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>


  )
}

export default Header
