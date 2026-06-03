import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const{isLogin, setIsLogin} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { username, password }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)

      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      setIsLogin(true)

      console.log('Login successful')
      setSuccess(true)
      setError(null) // Clear any previous errors on successful login
      navigate('/') // Redirect to home page after successful login

    } catch (error) {
      setError(error.response?.data)
      setSuccess(false)
      console.error('Error during Login:', error.response?.data)

    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>

          <div className="col-md-6 register-form bg-light-dark p-4 rounded">
            <h2 className="text-light text-center">Login</h2>

            <form onSubmit={handleLogin}>

              <div className="mb-3">
                <label className="form-label text-light">Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="form-text text-light">Please enter your username.</div>
                
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label text-light">Check me out</label>
              </div>

              {success && (
                <div className="alert alert-success" role="alert">
                  Login successful!
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error.detail || 'Login failed. Please check your credentials.'}
                </div>
              )}

              {loading ? (
                <button type="submit" className="btn btn-primary d-block mx-auto px-4" disabled>Please Wait..</button>
              ) : (
                <button type="submit" className="btn btn-primary d-block mx-auto px-4">Login</button>
              )}

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
