import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>

          <div className="col-md-6 register-form bg-light-dark p-4 rounded">
            <h2 className="text-light text-center">Login</h2>

            <form>

              <div className="mb-3">
                <label  className="form-label text-light">Email address</label>
                <input type="email" className="form-control"  />
                  <div id="emailHelp" className="form-text text-light">Please enter your email address.</div>
              </div>

              <div className="mb-3">
                <label  className="form-label text-light">Password</label>
                <input type="password" className="form-control" />
              </div>
              
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input"  />
                  <label className="form-check-label text-light">Check me out</label>
              </div>

              <button type="submit" className="btn btn-primary mx-auto d-block">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
