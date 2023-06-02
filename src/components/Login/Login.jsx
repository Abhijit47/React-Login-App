import React, { useState } from 'react';
import './Login.css';

const Login = ({ loginUser, error }) => {

  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(details);
  };

  // console.log({ ...details });

  return (
    <>
      <h1 className='text-center p-2'>User Login Page</h1>
      <div className="bg-info bg-gradient shadow-sm rounded-3 p-2 m-lg-auto m-md-auto m-sm-auto m-auto row col-lg-5 col-md-8 col-sm-9 col-10">
        <form onSubmit={handleSubmit} className="from-group p-2">
          <label htmlFor="email" className='mb-2'>Email</label>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className='form-control mb-2'
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
          </div>

          <label htmlFor="password" className='mb-2'>Password</label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              className='form-control mb-3'
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
            />
          </div>
          <button className='btn btn-outline-success shadow-sm' onClick={handleSubmit}>Sign in</button>
        </form>
      </div>
    </>
  );
};

export default Login;