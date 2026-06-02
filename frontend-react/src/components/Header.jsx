import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <>
    <nav className='navbar container align-items-start'>
       
       <Link className=' navbar-brand text-light' to='/'>
         Stock Prediction Portal
       </Link>
       
        <div className='btn-header'>
            <Link className='btn btn-outline-info login-btn' to="/login">Login</Link>
            &nbsp;
            <Link className='btn btn-info register-btn' to="/register">Register</Link>
        </div>
    </nav>
    </>

    
  )
}

export default Header
