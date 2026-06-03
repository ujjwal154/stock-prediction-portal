import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(username, email, password);
        const userData = {
            username, email, password
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log("resposnedata-==>", response.data)
            console.log('registration successful')
            setSuccess(true)
            setError(null) // Clear any previous errors on successful registration
        } catch (error) {
            setError(error.response.data)
            setSuccess(false)
            console.error('Error during registration:', error.response.data)
        } finally {
            setLoading(false);
        }

    }

    return (

        <>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 register-form bg-light-dark p-4 rounded">
                        <h2 className="text-light text-center">Create An Account</h2>

                        <form onSubmit={handleRegistration}>
                            <div className="mb-3">
                                <label className="form-label text-light">Username</label>
                                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <small className="text-danger">{error?.username}</small>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-light">Email address</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <small className="text-danger">{error?.email}</small>
                                <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-light">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <small className="text-danger">{error?.password}</small>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label text-light">Check me out</label>
                            </div>

                            {success && (
                                <div className="alert alert-success" role="alert">
                                    Registration successful!
                                </div>
                            )}

                            {loading ? (
                                <button type="submit" className="btn btn-primary d-block mx-auto px-4" disabled>Please Wait..</button>
                            ) : (
                                <button type="submit" className="btn btn-primary d-block mx-auto px-4">Register</button>
                            )}
                        </form>



                    </div>

                </div>

            </div>

        </>
    )
}

export default Register