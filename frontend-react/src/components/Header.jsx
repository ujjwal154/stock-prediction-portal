import React from 'react'

const Header = () => {
  return (

    <>
    <nav className='navbar container align-items-start'>
       
       <a className=' navbar-brand text-light'>Stock Prediction Portal</a>
       
        <div className='btn-header'>
            <a className='btn btn-outline-info login-btn' href=''>Login</a>
            &nbsp;
            <a className='btn btn-info register-btn ' href=''>Register</a>
        </div>
    </nav>
    </>

    
  )
}

export default Header
